import React, { FunctionComponent } from 'react';

import Icon from '@/assets/svg/wild.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const Wild: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default Wild;
