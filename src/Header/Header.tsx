import * as React from "react";
import * as backgroundImage from '../Assets/Imgs/header-background.png';
import * as logo from '../Assets/Imgs/logo.png';
import { Button, TextButton } from "../Shared/Button";
import styled from "../Theme";

const Container = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;           
  background-repeat: no-repeat;
  background-position: center center;  

  display flex;
  flex-direction: column;
`;

const Navbar = styled.div`  
  position: absolute;

  width: 100%;
  
  display: flex;
  flex-direction: row-reverse;
`;

const Content = styled.div`
  flex-grow:1;

  display flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;
`;

const Text = styled.p`
  margin: 15px 0px;

  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.color.white};
`;

const Name = styled.p`
  margin: 15px 0px;

  font-size: calc(${props => props.theme.fontSize} * 2);
  color: ${props => props.theme.color.white};
`;

const GreyName = styled.span`
  color: ${props => props.theme.color.lightGrey};
`;

const Logo = styled.img`
  height: 64px;
  width: 64px;

  padding-top: 24px;

  color: ${props => props.theme.color.white};
`;

const Divider = styled.hr`
  width: 50%;

  margin-bottom: 100px;

  position: absolute;
  bottom: 0px;
  left:0;
  right: 0;

  border-left: none;
  border-right: none;
  border-top: none;

  border-bottom: 1px solid ${props => props.theme.color.dark};
`;
const Header: React.SFC<{}> = () => (
  <Container>
    <Navbar>
      <Button>Contact</Button>
      <TextButton>Skills</TextButton>
      <TextButton>About</TextButton>
    </Navbar>
    <Content>
      <Text>Designer, Front/Backend Developer & UX Enthusiast.</Text>
      <Name>Tiago <GreyName>Suzukayama</GreyName></Name>
      <Logo src={logo} />
    </Content>

    <Divider />
  </Container>
);

export default Header;