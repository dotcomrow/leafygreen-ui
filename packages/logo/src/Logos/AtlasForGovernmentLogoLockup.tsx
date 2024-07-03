import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

import { css, cx } from '@leafygreen-ui/emotion';

import {
  BaseLogoProps,
  SupportedColors,
  SupportedColorsMap,
} from '../Logo.types';
import { getAccessibleProps } from '../utils';

/**
 * # AtlasForGovernmentLogoLockup
 *
 * React Component that displays the Atlas for Government Logo Lockup.
 *
 * ```
 * <AtlasForGovernmentLogoLockup />
 * ```
 * @param props.color Determines the color of the logo.
 * @param props.height Determines height of the <Logo /> component.
 */
export const AtlasForGovernmentLogoLockup = React.forwardRef(
  (
    {
      height = 40,
      className,
      color = SupportedColors.GreenDark2,
      role = 'img',
      'aria-label': ariaLabel = 'MongoDB Logo',
      ...rest
    }: BaseLogoProps,
    ref: React.LegacyRef<SVGSVGElement> | undefined,
  ): ReactElement => {
    const fill = SupportedColorsMap[color];

    return (
      <svg
        {...getAccessibleProps({ 'aria-label': ariaLabel, role })}
        className={cx(
          css`
            width: auto;
            height: ${height}px;
          `,
          className,
        )}
        height={height}
        viewBox="0 0 196 48"
        fill="none"
        ref={ref}
        {...rest}
      >
        <path
          d="M9.5873 4.2473C8.33114 2.7569 7.24945 1.24322 7.02846 0.928843C7.00519 0.905555 6.97029 0.905555 6.94703 0.928843C6.72604 1.24322 5.64435 2.7569 4.38818 4.2473C-6.39386 17.9985 6.08634 27.2786 6.08634 27.2786L6.19101 27.3484C6.28406 28.7806 6.51669 30.8415 6.51669 30.8415H6.98193H7.44717C7.44717 30.8415 7.6798 28.7922 7.77285 27.3484L7.87752 27.2669C7.88915 27.2785 20.3693 17.9985 9.5873 4.2473ZM6.98193 27.069C6.98193 27.069 6.42364 26.5916 6.27243 26.3471V26.3238L6.94703 11.35C6.94703 11.3034 7.01683 11.3034 7.01683 11.35L7.69142 26.3238V26.3471C7.54022 26.5916 6.98193 27.069 6.98193 27.069Z"
          fill={fill}
        />
        <path
          d="M30.3379 24.0132L25.1373 11.3112L25.1256 11.2761H21.0794V12.1299H21.7324C21.9306 12.1299 22.1172 12.2118 22.2571 12.3522C22.397 12.4925 22.467 12.6797 22.467 12.8785L22.3504 25.6623C22.3504 26.06 22.0239 26.3875 21.6274 26.3992L20.9628 26.4109V27.253H24.9041V26.4109L24.4959 26.3992C24.0995 26.3875 23.773 26.06 23.773 25.6623V13.6153L29.4401 27.253C29.5217 27.4518 29.7083 27.5805 29.9181 27.5805C30.128 27.5805 30.3146 27.4518 30.3962 27.253L35.935 13.9194L36.0166 25.6623C36.0166 26.0717 35.6902 26.3992 35.282 26.4109H34.8623V27.253H39.4799V26.4109H38.8502C38.4537 26.4109 38.1272 26.0717 38.1156 25.674L38.0806 12.8902C38.0806 12.4808 38.4071 12.1533 38.8035 12.1416L39.4799 12.1299V11.2761H35.5386L30.3379 24.0132Z"
          fill={fill}
        />
        <path
          d="M66.5997 26.1884C66.4711 26.0596 66.4009 25.8838 66.4009 25.6729V19.393C66.4009 18.1979 66.0502 17.2606 65.3487 16.5928C64.659 15.925 63.7003 15.5852 62.5078 15.5852C60.836 15.5852 59.515 16.2647 58.5914 17.6004C58.5797 17.6238 58.5446 17.6356 58.5095 17.6356C58.4745 17.6356 58.4511 17.6121 58.4511 17.577L58.0185 15.9015H57.2937L55.4348 16.9677V17.5535H55.9141C56.1363 17.5535 56.3233 17.6121 56.4519 17.7293C56.5805 17.8465 56.6507 18.0222 56.6507 18.2682V25.6612C56.6507 25.8721 56.5805 26.0478 56.4519 26.1767C56.3233 26.3056 56.148 26.3759 55.9375 26.3759H55.4699V27.2312H59.7488V26.3759H59.2811C59.0707 26.3759 58.8953 26.3056 58.7667 26.1767C58.6381 26.0478 58.568 25.8721 58.568 25.6612V20.7638C58.568 20.1428 58.7083 19.5219 58.9655 18.9126C59.2344 18.3151 59.6318 17.8113 60.1579 17.4247C60.684 17.038 61.3154 16.8506 62.0402 16.8506C62.8586 16.8506 63.4782 17.1083 63.864 17.6238C64.2498 18.1394 64.4485 18.8072 64.4485 19.6039V25.6495C64.4485 25.8604 64.3784 26.0361 64.2498 26.165C64.1212 26.2939 63.9458 26.3642 63.7354 26.3642H63.2677V27.2195H67.5466V26.3642H67.079C66.9036 26.3876 66.7399 26.3173 66.5997 26.1884Z"
          fill={fill}
        />
        <path
          d="M105.693 12.2325C104.51 11.6027 103.188 11.2761 101.762 11.2761H96.1957V12.1275H96.7408C96.9495 12.1275 97.135 12.2092 97.3205 12.3958C97.4945 12.5707 97.5872 12.769 97.5872 12.9789V25.5283C97.5872 25.7382 97.4945 25.9365 97.3205 26.1115C97.1466 26.2864 96.9495 26.3797 96.7408 26.3797H96.1957V27.2311H101.762C103.188 27.2311 104.51 26.9046 105.693 26.2747C106.875 25.6449 107.838 24.7119 108.533 23.5223C109.229 22.3327 109.589 20.8981 109.589 19.2653C109.589 17.6325 109.229 16.2096 108.533 15.0083C107.826 13.7953 106.875 12.8739 105.693 12.2325ZM107.351 19.2419C107.351 20.7348 107.084 21.9944 106.562 23.0091C106.04 24.0238 105.345 24.7819 104.487 25.2717C103.628 25.7616 102.678 26.0065 101.657 26.0065H100.532C100.324 26.0065 100.138 25.9249 99.9527 25.7383C99.7788 25.5633 99.686 25.365 99.686 25.1551V13.3171C99.686 13.1072 99.7672 12.9206 99.9527 12.734C100.127 12.5591 100.324 12.4657 100.532 12.4657H101.657C102.678 12.4657 103.628 12.7107 104.487 13.2005C105.345 13.6904 106.04 14.4484 106.562 15.4631C107.084 16.4895 107.351 17.7607 107.351 19.2419Z"
          fill={fill}
        />
        <path
          d="M122.745 20.0934C122.231 19.4985 121.237 18.997 120.068 18.7288C121.681 17.924 122.511 16.7927 122.511 15.3348C122.511 14.5418 122.301 13.8303 121.88 13.2238C121.459 12.6174 120.863 12.1275 120.103 11.7893C119.344 11.4511 118.455 11.2761 117.45 11.2761H111.149V12.1275H111.652C111.862 12.1275 112.049 12.2092 112.236 12.3958C112.412 12.5707 112.505 12.769 112.505 12.9789V25.5283C112.505 25.7382 112.412 25.9365 112.236 26.1115C112.061 26.2864 111.862 26.3797 111.652 26.3797H111.103V27.2311H117.941C118.981 27.2311 119.951 27.0562 120.828 26.7063C121.705 26.3564 122.406 25.8432 122.909 25.1668C123.423 24.4903 123.68 23.6622 123.68 22.7059C123.669 21.6795 123.365 20.8048 122.745 20.0934ZM114.902 25.7499C114.726 25.575 114.633 25.3767 114.633 25.1668V19.5335H117.882C119.028 19.5335 119.905 19.8251 120.512 20.4082C121.12 20.9914 121.424 21.7495 121.424 22.6825C121.424 23.2424 121.284 23.7905 121.027 24.292C120.758 24.8052 120.361 25.2134 119.823 25.5283C119.297 25.8432 118.642 26.0065 117.882 26.0065H115.486C115.276 26.0065 115.089 25.9249 114.902 25.7499ZM114.644 18.3322V13.3288C114.644 13.1189 114.726 12.9323 114.913 12.7457C115.089 12.5707 115.287 12.4774 115.498 12.4774H117.041C118.151 12.4774 118.969 12.7573 119.484 13.2938C119.998 13.842 120.255 14.5418 120.255 15.4048C120.255 16.2912 120.01 17.0027 119.531 17.5392C119.051 18.064 118.327 18.3322 117.368 18.3322H114.644Z"
          fill={fill}
        />
        <path
          d="M50.3105 16.3291C49.4173 15.8409 48.4197 15.5852 47.3409 15.5852C46.2621 15.5852 45.2529 15.8293 44.3713 16.3291C43.4781 16.8173 42.7705 17.5263 42.2485 18.4213C41.7265 19.3163 41.4597 20.3623 41.4597 21.5247C41.4597 22.687 41.7265 23.7331 42.2485 24.6281C42.7705 25.523 43.4781 26.2321 44.3713 26.7202C45.2645 27.2084 46.2621 27.4641 47.3409 27.4641C48.4197 27.4641 49.4289 27.22 50.3105 26.7202C51.2037 26.2321 51.9114 25.523 52.4334 24.6281C52.9554 23.7331 53.2221 22.687 53.2221 21.5247C53.2221 20.3623 52.9554 19.3163 52.4334 18.4213C51.9114 17.5263 51.2037 16.8173 50.3105 16.3291ZM51.1689 21.5247C51.1689 22.9543 50.8209 24.1166 50.1249 24.9535C49.4405 25.7904 48.5009 26.2204 47.3409 26.2204C46.1809 26.2204 45.2413 25.7904 44.5569 24.9535C43.8609 24.1166 43.5129 22.9543 43.5129 21.5247C43.5129 20.095 43.8609 18.9327 44.5569 18.0958C45.2413 17.2589 46.1809 16.8289 47.3409 16.8289C48.5009 16.8289 49.4405 17.2589 50.1249 18.0958C50.8209 18.9327 51.1689 20.095 51.1689 21.5247Z"
          fill={fill}
        />
        <path
          d="M91.4209 16.3291C90.5277 15.8409 89.53 15.5852 88.4512 15.5852C87.3724 15.5852 86.3632 15.8293 85.4816 16.3291C84.5884 16.8173 83.8808 17.5263 83.3588 18.4213C82.8368 19.3163 82.57 20.3623 82.57 21.5247C82.57 22.687 82.8368 23.7331 83.3588 24.6281C83.8808 25.523 84.5884 26.2321 85.4816 26.7202C86.3748 27.2084 87.3724 27.4641 88.4512 27.4641C89.53 27.4641 90.5393 27.22 91.4209 26.7202C92.3141 26.2321 93.0217 25.523 93.5437 24.6281C94.0657 23.7331 94.3325 22.687 94.3325 21.5247C94.3325 20.3623 94.0657 19.3163 93.5437 18.4213C93.0217 17.5263 92.3025 16.8173 91.4209 16.3291ZM92.2793 21.5247C92.2793 22.9543 91.9313 24.1166 91.2353 24.9535C90.5508 25.7904 89.6112 26.2204 88.4512 26.2204C87.2912 26.2204 86.3516 25.7904 85.6672 24.9535C84.9712 24.1166 84.6232 22.9543 84.6232 21.5247C84.6232 20.0834 84.9712 18.9327 85.6672 18.0958C86.3516 17.2589 87.2912 16.8289 88.4512 16.8289C89.6112 16.8289 90.5508 17.2589 91.2353 18.0958C91.9197 18.9327 92.2793 20.095 92.2793 21.5247Z"
          fill={fill}
        />
        <path
          d="M74.8416 15.5852C73.907 15.5852 73.0542 15.7837 72.2831 16.1807C71.5121 16.5777 70.9046 17.1149 70.4724 17.8038C70.0401 18.481 69.8181 19.24 69.8181 20.0457C69.8181 20.7697 69.9817 21.4352 70.3205 22.0307C70.6476 22.6029 71.0915 23.0816 71.6523 23.4787L69.9817 25.7439C69.7714 26.0242 69.748 26.3978 69.8999 26.7014C70.0634 27.0167 70.3672 27.2035 70.7177 27.2035H71.1967C70.7294 27.5188 70.3555 27.8924 70.0985 28.3362C69.7947 28.8383 69.6429 29.3637 69.6429 29.9008C69.6429 30.905 70.0868 31.7341 70.963 32.353C71.8275 32.9718 73.0425 33.2871 74.5729 33.2871C75.636 33.2871 76.6524 33.1119 77.5753 32.7733C78.5099 32.4347 79.2692 31.9326 79.83 31.2787C80.4024 30.6248 80.6945 29.8308 80.6945 28.92C80.6945 27.9625 80.3441 27.2853 79.5263 26.6314C78.8253 26.0826 77.7272 25.7906 76.3603 25.7906H71.6873C71.6756 25.7906 71.664 25.779 71.664 25.779C71.664 25.779 71.6523 25.7556 71.664 25.7439L72.8789 24.1092C73.206 24.261 73.5098 24.3544 73.7785 24.4128C74.0589 24.4712 74.3743 24.4945 74.7248 24.4945C75.7061 24.4945 76.594 24.296 77.365 23.899C78.1361 23.502 78.7552 22.9649 79.1992 22.276C79.6431 21.5987 79.8651 20.8397 79.8651 20.034C79.8651 19.17 79.4445 17.5936 78.2996 16.7879C78.2996 16.7762 78.3113 16.7762 78.3113 16.7762L80.823 17.0565V15.9005H76.8043C76.1734 15.702 75.5192 15.5852 74.8416 15.5852ZM76.2435 22.8948C75.7996 23.1284 75.3206 23.2568 74.8416 23.2568C74.0589 23.2568 73.3696 22.9766 72.7855 22.4278C72.2013 21.8789 71.9093 21.0733 71.9093 20.0457C71.9093 19.0182 72.2013 18.2125 72.7855 17.6637C73.3696 17.1149 74.0589 16.8346 74.8416 16.8346C75.3323 16.8346 75.7996 16.9514 76.2435 17.1966C76.6874 17.4301 77.0496 17.7921 77.3416 18.2708C77.622 18.7496 77.7739 19.3451 77.7739 20.0457C77.7739 20.758 77.6337 21.3535 77.3416 21.8206C77.0613 22.2993 76.6874 22.6613 76.2435 22.8948ZM73.0775 27.1919H76.2435C77.1197 27.1919 77.6804 27.367 78.0543 27.7407C78.4281 28.1143 78.615 28.6164 78.615 29.2002C78.615 30.0526 78.2763 30.7532 77.5987 31.2787C76.9211 31.8042 76.0098 32.0727 74.8883 32.0727C73.907 32.0727 73.0892 31.8508 72.4934 31.4305C71.8976 31.0101 71.5939 30.3679 71.5939 29.5505C71.5939 29.0368 71.7341 28.558 72.0144 28.1377C72.2948 27.7173 72.6336 27.4137 73.0775 27.1919Z"
          fill={fill}
        />
        <path
          d="M126.05 27.0364C125.819 26.9104 125.646 26.727 125.507 26.5092C125.38 26.2799 125.311 26.0392 125.311 25.7756C125.311 25.5119 125.38 25.2598 125.507 25.042C125.634 24.8127 125.819 24.6408 126.05 24.5147C126.281 24.3886 126.536 24.3198 126.825 24.3198C127.114 24.3198 127.368 24.3886 127.599 24.5147C127.83 24.6408 128.003 24.8242 128.142 25.042C128.269 25.2712 128.339 25.5119 128.339 25.7756C128.339 26.0392 128.269 26.2914 128.142 26.5092C128.015 26.7384 127.83 26.9104 127.599 27.0364C127.368 27.1625 127.114 27.2313 126.825 27.2313C126.547 27.2313 126.281 27.174 126.05 27.0364ZM127.472 26.876C127.668 26.7728 127.807 26.6123 127.923 26.4289C128.027 26.2341 128.084 26.0163 128.084 25.7756C128.084 25.5349 128.027 25.3171 127.923 25.1222C127.818 24.9273 127.668 24.7783 127.472 24.6752C127.275 24.572 127.067 24.5147 126.825 24.5147C126.582 24.5147 126.374 24.572 126.177 24.6752C125.981 24.7783 125.842 24.9388 125.727 25.1222C125.623 25.3171 125.565 25.5349 125.565 25.7756C125.565 26.0163 125.623 26.2341 125.727 26.4289C125.831 26.6238 125.981 26.7728 126.177 26.876C126.374 26.9791 126.582 27.0364 126.825 27.0364C127.067 27.0364 127.287 26.9791 127.472 26.876ZM126.201 26.4748V26.3716L126.224 26.3602H126.293C126.316 26.3602 126.339 26.3487 126.351 26.3372C126.374 26.3143 126.374 26.3028 126.374 26.2799V25.2139C126.374 25.191 126.362 25.1681 126.351 25.1566C126.328 25.1337 126.316 25.1337 126.293 25.1337H126.224L126.201 25.1222V25.019L126.224 25.0076H126.825C126.998 25.0076 127.125 25.042 127.229 25.1222C127.333 25.2024 127.379 25.3056 127.379 25.4432C127.379 25.5463 127.345 25.6495 127.264 25.7183C127.183 25.7985 127.09 25.8443 126.975 25.8558L127.114 25.9017L127.379 26.3258C127.402 26.3602 127.426 26.3716 127.46 26.3716H127.53L127.541 26.3831V26.4863L127.53 26.4977H127.171L127.148 26.4863L126.778 25.8673H126.686V26.2799C126.686 26.3028 126.697 26.3258 126.709 26.3372C126.732 26.3602 126.744 26.3602 126.767 26.3602H126.836L126.859 26.3716V26.4748L126.836 26.4863H126.224L126.201 26.4748ZM126.79 25.7183C126.882 25.7183 126.963 25.6953 127.01 25.638C127.056 25.5922 127.09 25.5119 127.09 25.4202C127.09 25.3285 127.067 25.2597 127.021 25.2024C126.975 25.1451 126.905 25.1222 126.825 25.1222H126.778C126.755 25.1222 126.732 25.1337 126.721 25.1451C126.697 25.168 126.697 25.1795 126.697 25.2024V25.7183H126.79Z"
          fill={fill}
        />
        <path
          d="M20.7531 47.6118H22.1157L23.8277 43.7512H29.7671L31.4791 47.6118H32.8766L27.3389 35.2088H26.2733L20.7531 47.6118ZM24.3867 42.5109L26.7974 37.078L29.2081 42.5109H24.3867Z"
          fill={fill}
        />
        <path
          d="M37.1843 47.6992C37.6734 47.6992 38.1102 47.6118 38.477 47.4721V46.3715C38.1975 46.4763 37.7258 46.5637 37.3765 46.5637C36.4506 46.5637 35.9265 46.1968 35.9265 45.0788V40.0303H38.477V38.8773H35.9265V36.4491H34.7037V38.8773H32.8345V40.0303H34.7037V45.1836C34.7037 46.8956 35.7693 47.6992 37.1843 47.6992Z"
          fill={fill}
        />
        <path
          d="M40.4718 47.6118H41.6946V34.5101H40.4718V47.6118Z"
          fill={fill}
        />
        <path
          d="M48.3186 47.7865C49.6637 47.7865 50.9215 47.0877 51.5504 46.1444V47.6118H52.7732V38.8773H51.5504V40.3447C50.9215 39.4014 49.6637 38.7026 48.3186 38.7026C45.838 38.7026 43.9688 40.7465 43.9688 43.2446C43.9688 45.7426 45.838 47.7865 48.3186 47.7865ZM48.4409 46.651C46.5368 46.651 45.2266 45.1312 45.2266 43.2446C45.2266 41.3579 46.5368 39.8381 48.4409 39.8381C50.345 39.8381 51.6552 41.3579 51.6552 43.2446C51.6552 45.1312 50.345 46.651 48.4409 46.651Z"
          fill={fill}
        />
        <path
          d="M58.412 47.7865C60.1239 47.7865 61.4865 47.0353 61.4865 45.2884C61.4865 43.9957 60.6829 43.0873 59.3029 42.738L57.9578 42.3886C56.9096 42.1091 56.5253 41.6724 56.5253 40.9911C56.5253 40.2399 57.259 39.7857 58.1674 39.7857C59.0758 39.7857 59.7571 40.3273 60.0191 41.1308H61.2245C61.0672 39.8381 60.0191 38.7026 58.1674 38.7026C56.5253 38.7026 55.3025 39.5586 55.3025 40.9911C55.3025 42.2314 56.0711 43.1398 57.556 43.5241L58.6915 43.821C59.8095 44.118 60.2637 44.6071 60.2637 45.3758C60.2637 46.2667 59.4077 46.686 58.412 46.686C57.4686 46.686 56.4729 46.3191 56.2109 45.1487H54.9881C55.1103 46.9305 56.6651 47.7865 58.412 47.7865Z"
          fill={fill}
        />
        <path
          d="M68.4308 47.6118H69.6537V40.0303H72.2041V38.8773H69.6537V37.0256C69.6537 35.9076 70.1603 35.5408 71.0861 35.5408C71.4355 35.5408 71.9246 35.6281 72.2041 35.7329V34.6324C71.8373 34.4926 71.3831 34.4053 70.894 34.4053C69.479 34.4053 68.4308 35.2088 68.4308 36.9208V38.8773H66.5616V40.0303H68.4308V47.6118Z"
          fill={fill}
        />
        <path
          d="M77.5465 47.7865C80.2018 47.7865 82.1059 45.7426 82.1059 43.2446C82.1059 40.7465 80.2018 38.7026 77.5465 38.7026C74.8912 38.7026 72.9871 40.7465 72.9871 43.2446C72.9871 45.7426 74.8912 47.7865 77.5465 47.7865ZM77.5465 46.651C75.555 46.651 74.2449 45.1137 74.2449 43.2446C74.2449 41.3754 75.555 39.8381 77.5465 39.8381C79.5379 39.8381 80.8481 41.3754 80.8481 43.2446C80.8481 45.1137 79.5379 46.651 77.5465 46.651Z"
          fill={fill}
        />
        <path
          d="M84.383 47.6118H85.6058V43.2271C85.6058 40.9911 86.9509 40.0128 88.034 40.0128C88.296 40.0128 88.5231 40.0477 88.7677 40.1351V38.8599C88.5581 38.8075 88.3484 38.79 88.1388 38.79C87.1082 38.79 85.9727 39.4538 85.6058 40.6766V38.8773H84.383V47.6118Z"
          fill={fill}
        />
        <path
          d="M100.195 47.8214C103.777 47.8214 106.729 44.974 106.432 40.6242H100.195V41.882H105.069C104.86 44.5547 102.921 46.5637 100.195 46.5637C97.313 46.5637 95.1294 44.3102 95.1294 41.4103C95.1294 38.5105 97.313 36.257 100.195 36.257C102.292 36.257 103.934 37.3925 104.615 38.8773H106.082C105.419 36.9033 103.235 34.9992 100.195 34.9992C96.6143 34.9992 93.7843 37.7943 93.7843 41.4103C93.7843 45.0264 96.6143 47.8214 100.195 47.8214Z"
          fill={fill}
        />
        <path
          d="M112.604 47.7865C115.259 47.7865 117.163 45.7426 117.163 43.2446C117.163 40.7465 115.259 38.7026 112.604 38.7026C109.949 38.7026 108.044 40.7465 108.044 43.2446C108.044 45.7426 109.949 47.7865 112.604 47.7865ZM112.604 46.651C110.612 46.651 109.302 45.1137 109.302 43.2446C109.302 41.3754 110.612 39.8381 112.604 39.8381C114.595 39.8381 115.905 41.3754 115.905 43.2446C115.905 45.1137 114.595 46.651 112.604 46.651Z"
          fill={fill}
        />
        <path
          d="M122.012 47.6118H122.973L127.06 38.8773H125.68L122.484 45.8125L119.287 38.8773H117.924L122.012 47.6118Z"
          fill={fill}
        />
        <path
          d="M132.166 47.7865C134.402 47.7865 135.73 46.4938 136.149 45.0089H134.891C134.297 46.2143 133.319 46.651 132.166 46.651C130.577 46.651 129.127 45.3933 129.092 43.5939H136.289C136.516 41.0784 135.014 38.7026 132.219 38.7026C129.476 38.7026 127.834 40.7116 127.834 43.2446C127.834 45.8474 129.651 47.7865 132.166 47.7865ZM132.166 39.8381C133.616 39.8381 134.752 40.764 135.031 42.5283H129.162C129.476 40.5543 130.874 39.8381 132.166 39.8381Z"
          fill={fill}
        />
        <path
          d="M138.598 47.6118H139.821V43.2271C139.821 40.9911 141.166 40.0128 142.249 40.0128C142.511 40.0128 142.738 40.0477 142.983 40.1351V38.8599C142.773 38.8075 142.564 38.79 142.354 38.79C141.323 38.79 140.188 39.4538 139.821 40.6766V38.8773H138.598V47.6118Z"
          fill={fill}
        />
        <path
          d="M144.842 47.6118H146.065V43.262C146.065 41.0959 147.253 39.8381 148.79 39.8381C150.083 39.8381 150.991 40.7814 150.991 42.3187V47.6118H152.214V42.144C152.214 40.0128 150.834 38.7026 148.93 38.7026C147.794 38.7026 146.694 39.1918 146.065 40.3447V38.8773H144.842V47.6118Z"
          fill={fill}
        />
        <path
          d="M155.078 47.6118H156.301V43.262C156.301 41.1832 157.366 39.8381 158.903 39.8381C160.109 39.8381 160.738 40.8863 160.738 42.3187V47.6118H161.96V43.262C161.96 41.1832 163.009 39.8381 164.546 39.8381C165.751 39.8381 166.398 40.8863 166.398 42.3187V47.6118H167.62V42.144C167.62 40.1002 166.467 38.7026 164.633 38.7026C163.236 38.7026 162.17 39.4887 161.733 40.6592C161.314 39.4538 160.353 38.7026 159.026 38.7026C157.82 38.7026 156.807 39.3315 156.301 40.3447V38.8773H155.078V47.6118Z"
          fill={fill}
        />
        <path
          d="M174.099 47.7865C176.335 47.7865 177.662 46.4938 178.081 45.0089H176.824C176.23 46.2143 175.251 46.651 174.099 46.651C172.509 46.651 171.059 45.3933 171.024 43.5939H178.221C178.448 41.0784 176.946 38.7026 174.151 38.7026C171.408 38.7026 169.766 40.7116 169.766 43.2446C169.766 45.8474 171.583 47.7865 174.099 47.7865ZM174.099 39.8381C175.548 39.8381 176.684 40.764 176.963 42.5283H171.094C171.408 40.5543 172.806 39.8381 174.099 39.8381Z"
          fill={fill}
        />
        <path
          d="M180.531 47.6118H181.753V43.262C181.753 41.0959 182.941 39.8381 184.479 39.8381C185.771 39.8381 186.68 40.7814 186.68 42.3187V47.6118H187.902V42.144C187.902 40.0128 186.522 38.7026 184.618 38.7026C183.483 38.7026 182.382 39.1918 181.753 40.3447V38.8773H180.531V47.6118Z"
          fill={fill}
        />
        <path
          d="M193.791 47.6992C194.28 47.6992 194.717 47.6118 195.084 47.4721V46.3715C194.804 46.4763 194.332 46.5637 193.983 46.5637C193.057 46.5637 192.533 46.1968 192.533 45.0788V40.0303H195.084V38.8773H192.533V36.4491H191.31V38.8773H189.441V40.0303H191.31V45.1836C191.31 46.8956 192.376 47.6992 193.791 47.6992Z"
          fill={fill}
        />
      </svg>
    );
  },
);

AtlasForGovernmentLogoLockup.displayName = 'AtlasForGovernmentLogoLockup';

AtlasForGovernmentLogoLockup.propTypes = {
  height: PropTypes.number,
  color: PropTypes.oneOf(Object.values(SupportedColors)),
};
