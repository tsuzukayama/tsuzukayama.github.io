import styled from "../Theme";

export const Button = styled.button`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  margin: 16px;
  padding: 8px 16px;

  border: 0;
  box-sizing: border-box;

  box-shadow: inset 0 0 0 1px white;

  background-color: transparent;
  color: ${props => props.theme.color.white};

  position: relative;
  vertical-align: middle;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }

  transition: background-color 0.1s, color 0.1s;
`;

export const TextButton = styled.button`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  margin: 16px;
  padding: 8px 16px;

  border: 0;
  box-sizing: border-box;

  box-shadow: inset 0 0 0 1px transparent;

  background-color: transparent;
  color: ${props => props.theme.color.white};

  position: relative;
  vertical-align: middle;

  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  transition: color 0.25s;

  &::before,
  &::after {
    // Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
    border: 1px solid transparent;
    width: 0;
    height: 0;
  }

  // This covers the top & right borders (expands right, then down)
  &::before {
    top: 0;
    left: 0;
  }

  // And this the bottom & left borders (expands left, then up)
  &::after {
    bottom: 0;
    right: 0;
  }
  
  &:hover {
    color: white;
    cursor: pointer;
  }

  // Hover styles
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: white; // Make borders visible
    border-right-color: white;
    transition:
      width 0.05s ease-out, // Width expands first
      height 0.05s ease-out 0.05s; // And then height
  }

  &:hover::after {
    border-bottom-color: white; // Make borders visible
    border-left-color: white;
    transition:
      border-color 0s ease-out 0.1s, // Wait for ::before to finish before showing border
      width 0.05s ease-out 0.1s, // And then exanding width
      height 0.05s ease-out 0.15s; // And finally height
  }
`;