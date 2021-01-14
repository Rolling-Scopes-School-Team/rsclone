import React, { FunctionComponent } from 'react';

import Icon from '@/assets/svg/skip-xxl.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const SkipXxl: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default SkipXxl;
