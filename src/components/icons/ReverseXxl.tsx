import React, { FunctionComponent } from 'react';

import Icon from '@/assets/svg/reverseXxl.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const ReverseXxl: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default ReverseXxl;
