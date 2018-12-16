import * as React from 'react';
import { Element } from 'react-scroll';
import * as githubLogo from '../Assets/Imgs/github-logo.svg';
import * as linkedinLogo from '../Assets/Imgs/linkedin-logo.svg';
import * as twitterLogo from '../Assets/Imgs/twitter-logo.svg';
import { Button } from '../Shared/Button';
import { Input } from '../Shared/Input';
import { TextArea } from '../Shared/TextArea';
import styled from '../Theme';

interface IState {
  email: string;
  subject: string;
  message: string;
}

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

const ContainerContactForm = styled.div`
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


export class Contact extends React.Component<{}, IState>{

  public state = {
    email: '',
    message: '',
    subject: '',
  } as IState;

  public handleChange = (event: any) => {
    const change = {};
    change[event.target.id] = event.target.value
    this.setState(change)
  }

  public render = () => (
    <Element name="Contact">
      <Container>
        <Title>Get in touch:</Title>
        <IconList>
          <a
            href="https://github.com/tsuzukayama"
            target="_blank"
          >
            <Icon src={githubLogo} />
          </a>
          <a
            href="https://www.linkedin.com/in/tiago-suzukayama-80335754/"
            target="_blank"
          >
            <Icon src={linkedinLogo} />
          </a>
          <a
            href="https://twitter.com/tsuzukayama"
            target="_blank"
          >
            <Icon src={twitterLogo} />
          </a>
        </IconList>
        <p>...or send me an email:</p>
        <ContainerContactForm >
          <form action="https://formspree.io/tiago.suzukayama@gmail.com" method="POST">
            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="john@doe.com"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Input
              id="subject"
              name="subject"
              label="Subject"
              placeholder="Freelance job"
              value={this.state.subject}
              onChange={this.handleChange}
            />
            <TextArea
              id="message"
              name="message"
              label="Message"
              placeholder="Lorem Impsum"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </ContainerContactForm>

        <Divider />
        <p>{"Made by me, with React <3"}</p>
      </Container>
    </Element>
  );
}