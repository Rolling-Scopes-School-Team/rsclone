import React, { FunctionComponent } from 'react';

import Icon from '@/assets/svg/draw4CardsXxl.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const Draw4CardsXxl: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default Draw4CardsXxl;
