import React from 'react';

import { css } from '@leafygreen-ui/emotion';
import CheckmarkIcon from '@leafygreen-ui/icon/src/generated/Checkmark';
import EllipsisIcon from '@leafygreen-ui/icon/src/generated/Ellipsis';
import { fontWeights } from '@leafygreen-ui/tokens';
import { Overline } from '@leafygreen-ui/typography';

import { StepStates } from '../types';

import { StepIconProps } from './StepIcon.types';

export const StepIconGlyph = ({ state, children }: StepIconProps) => {
  if (state === StepStates.Completed) {
    return <CheckmarkIcon />;
  } else if (
    state === StepStates.UpcomingMultiple ||
    state === StepStates.CompletedMultiple
  ) {
    return <EllipsisIcon />;
  } else {
    // if Current (single) or Upcoming (single)
    return (
      <Overline
        className={css`
          font-weight: ${fontWeights.medium};
          color: inherit;
        `}
      >
        {children}
      </Overline>
    );
  }
};
