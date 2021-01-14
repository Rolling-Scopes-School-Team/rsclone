import React, { FunctionComponent } from 'react';

import Icon from '@/assets/svg/wildXxl.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const WildXxl: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default WildXxl;
