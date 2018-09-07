import * as React from 'react';
import * as githubLogo from '../Assets/Imgs/github-logo.svg';
import * as linkedinLogo from '../Assets/Imgs/linkedin-logo.svg';
import * as twitterLogo from '../Assets/Imgs/twitter-logo.svg';
import { Button } from '../Shared/Button';
import { Input } from '../Shared/Input';
import { TextArea } from '../Shared/TextArea';
import styled from '../Theme';


const Container = styled.div`
  display: flex;

  padding: 128px 64px 0px 64px;

  background-color: ${props => props.theme.color.dark};
  color: white;
  flex-direction: column;
  align-items: center;

  text-align: center;
  line-height: 200%;
`;

const Title = styled.p`
  font-size: calc(${props => props.theme.fontSize} * 2);
`;

const IconList = styled.div`
  display: flex;
`;

const Icon = styled.img`
  padding: 0px 24px;
  width: 48px;
  height: 48px;
`;

const ContactForm = styled.form`
  max-width: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

`;

const Divider = styled.hr`
  max-width: 800px;
  width: 100%;

  margin: 100px 100px 0px 100px;

  border-left: none;
  border-right: none;
  border-top: none;

  border-bottom: 1px solid ${props => props.theme.color.lightGrey};
`;


export const Contact: React.SFC<{}> = () => (
  <Container>
    <Title>Get in touch:</Title>
    <IconList>
      <Icon src={githubLogo} />
      <Icon src={linkedinLogo} />
      <Icon src={twitterLogo} />
    </IconList>
    <p>...or send me an email:</p>
    <ContactForm>
      <Input label="Email" placeholder="john@doe.com" />
      <Input label="Subject" placeholder="Freelance job" />
      <TextArea label="Message" placeholder="Lorem Impsum" />
    </ContactForm>
    <Button>Send</Button>
    <Divider />
    <p>{"Made by me, with React <3"}</p>
  </Container>
);