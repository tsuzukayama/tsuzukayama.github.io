import * as React from "react";
import styled from "../Theme";

const StyledTextArea = styled.textarea`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  border: 1px solid ${props => props.theme.color.lightGrey};
  width: 100%;

  text-indent: 24px;
  resize: none;

  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 4px;
  
`;

const Label = styled.label`
  font-size: 14px;
`;
export const TextArea: React.SFC<React.InputHTMLAttributes<any> & { label: string }> = ({ style, label, ...props }) => (
  <Container {...style}>
    <Label>{label}</Label>
    <StyledTextArea rows={4} {...props} />
  </Container>
);