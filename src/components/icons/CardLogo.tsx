import React, { FunctionComponent } from 'react';

import Icon from '@/assets/svg/cardLogo.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const CardLogo: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default CardLogo;
