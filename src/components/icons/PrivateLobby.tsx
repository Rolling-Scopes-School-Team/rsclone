import React, { FunctionComponent } from 'react';

import Icon from '@/assets/svg/private-lobby.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const PrivateLobby: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Icon />
  </BaseIcon>
);

export default PrivateLobby;
