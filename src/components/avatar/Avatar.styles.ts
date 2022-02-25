import styled from 'styled-components/macro';
import { IAvatarProps } from './Avatar.types';
import { setSize } from './Avatar.utils';

const Avatar = styled.img<IAvatarProps>`
  width: ${({ size }) => setSize(size)};
  height: ${({ size }) => setSize(size)};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.secondary};
`;

export default {
  Avatar,
};
