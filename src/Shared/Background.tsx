import * as React from 'react';
import styled from '../Theme';


interface IProps extends React.HTMLAttributes<any> {
  color: string;
}

const StyledBackground = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: 184px;
  bottom: 0;
  background-color: ${props => props.theme.color[props.color]};
  z-index: 1;
`;

export const Background = ({ ...props }: IProps) => (
  <StyledBackground {...props} />
)