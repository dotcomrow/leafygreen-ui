import type { StorybookConfig } from '@storybook/react-webpack5';
import { globSync } from 'glob';
import { isRegExp, isUndefined } from 'lodash';
import path from 'path';
import { ProvidePlugin, RuleSetRule, WebpackPluginInstance } from 'webpack';

export function findStories(
  includePattern: string,
  excludePattern: string,
): () => Promise<Array<string>> {
  return async () => {
    const storybookFolderRelativePaths = globSync(
      [includePattern, `!${excludePattern}`],
      {
        cwd: path.join(process.cwd(), '.storybook'),
      },
    );

    return storybookFolderRelativePaths;
  };
}

const config: StorybookConfig = {
  // @ts-expect-error https://github.com/storybookjs/storybook/issues/23624
  stories: findStories(
    '../{packages,tools}/**/*.stor@(y|ies).@(js|jsx|ts|tsx)',
    '../{packages,tools}/*/node_modules',
  ),
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  core: {
    disableTelemetry: true,
  },
  staticDirs: ['./static'],

  babel: async options => {
    return {
      ...options,
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
    };
  },

  webpackFinal: config => {
    config.module = config.module ?? {};
    config.module.rules = config.module.rules ?? [];
    config.plugins = config.plugins ?? [];
    config.resolve = config.resolve ?? {};

    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    // We want to override this for svg
    const fileLoaderRule = config.module.rules.find(
      rule => isRule(rule) && isRegExp(rule.test) && rule?.test.test('.svg'),
    ) as RuleSetRule | undefined;

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    // Required for Webpack 5
    config.resolve.fallback = {
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    };

    config.plugins.push(
      // @ts-expect-error - webpack TS can of worms
      new ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    );

    return config;
  },

  typescript: {
    check: false,
  },
  docs: {
    autodocs: false,
  },
};

export default config;

function isRule(rule: any): rule is RuleSetRule {
  return rule !== '...' && typeof rule === 'object' && !isUndefined(rule);
}