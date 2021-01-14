import React, { FunctionComponent } from 'react';

import Icon from '@/assets/svg/draw4Cards.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const Draw4Cards: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default Draw4Cards;
