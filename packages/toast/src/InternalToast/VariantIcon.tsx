/* eslint-disable react/display-name */
import React from 'react';

import CheckmarkWithCircleIcon from '@leafygreen-ui/icon/src/generated/CheckmarkWithCircle';
import ImportantWithCircleIcon from '@leafygreen-ui/icon/src/generated/ImportantWithCircle';
import InfoWithCircle from '@leafygreen-ui/icon/src/generated/InfoWithCircle';
import RefreshIcon from '@leafygreen-ui/icon/src/generated/Refresh';
import WarningIcon from '@leafygreen-ui/icon/src/generated/Warning';

import { Variant } from '../Toast.types';

export const variantIcons: Record<
  Variant,
  React.ComponentType<React.PropsWithChildren<any>>
> = {
  [Variant.Success]: CheckmarkWithCircleIcon,
  [Variant.Note]: InfoWithCircle,
  [Variant.Warning]: WarningIcon,
  [Variant.Important]: ImportantWithCircleIcon,
  [Variant.Progress]: RefreshIcon,
};
