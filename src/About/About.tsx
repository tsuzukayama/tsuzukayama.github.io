import * as React from 'react';
import { Element } from 'react-scroll';
import styled from '../Theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  line-height: 200%;

  padding: 0px 64px;

  background: linear-gradient(180deg, ${props => props.theme.color.white} 65%, ${props => props.theme.color.dark} 35%);
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: calc(${props => props.theme.fontSize} * 2);
`;

const Text = styled.p`
  margin-bottom: 128px;
`;

const SkillsContainer = styled.div`
  background-color: ${props => props.theme.color.white};

  display: flex;

  border: 1px solid ${props => props.theme.color.lightGrey};
  border-radius: 2px;

  box-shadow: 0px 1px 1px ${props => props.theme.color.lightGrey};

  &:div:last-child {
    border-right: none;
  }

  &:first-child {
    border-left: none;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  margin: 16px;

  &:last-child {
    border-right: none;
  }

  &:first-child {
    border-left: none;
  }

  & h2 {
    font-weight: 400;;
  }
`;

const Divider = styled.div`
  width: 1px;
  margin-top: 16px;
  margin-bottom: 16px;

  border-left: 1px solid ${props => props.theme.color.lightGrey};

  @media (max-width: 800px) {
    height: 100%;
    border-top: 1px solid ${props => props.theme.color.lightGrey};
    border-left: none;
    width: 80%;
    margin: 0px;  
  }
`;

const SkillsListTitle = styled.p`
  font-weight: bold;
  margin: 0px;
  margin-top: 16px;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`;

const SkillListItem = styled.li`

`;

const About: React.SFC<{}> = () => (
  <Element name="About">

    <Container>
      <Content>
        <Title>Hi</Title>
        <Text>
          I am a 22 year old frontend (currently) and backend developer, currently graduating in Computer Science at Universidade Federal do ABC, Brasil.
      <br />
          I am passionate about combining beautiful designs with great usability. The web should be about ease of use in the first place.
      <br />
          My current focus is in improving my frontend skills with React, and in studying the core concepts of general and UX design.
      <br />
          Another area that is currentlyin my interests is project planning, where I have been focusing on Agile methodologies, in order to improve my current workplace.
    </Text>
        <Element name="Skills">
          <SkillsContainer>
            <Skill>
              <h2>Design</h2>
              <p>Minimalist design, usability over aesthetic.</p>
              <SkillsListTitle>Skills:</SkillsListTitle>
              <SkillList>
                <SkillListItem>Adobe XD</SkillListItem>
              </SkillList>
            </Skill>
            <Divider />
            <Skill>
              <h2>Front-end</h2>
              <p>Reusable components, automated tasks, fast development.</p>
              <SkillsListTitle>Skills:</SkillsListTitle>
              <SkillList>
                <SkillListItem>React/Angular/VanillaJS</SkillListItem>
                <SkillListItem>Typescript</SkillListItem>
                <SkillListItem>Sass</SkillListItem>
                <SkillListItem>Jest</SkillListItem>
                <SkillListItem>Gulp</SkillListItem>
              </SkillList>
            </Skill>
            <Divider />
            <Skill>
              <h2>Back-end</h2>
              <p>Clean code, simple but organized architecture.</p>
              <SkillsListTitle>Skills:</SkillsListTitle>
              <SkillList>
                <SkillListItem>.Net/Java/Python/PHP</SkillListItem>
                <SkillListItem>SQLServer/MySQL/MongoDB</SkillListItem>
              </SkillList>
            </Skill>
          </SkillsContainer>
        </Element>
      </Content>
    </Container>
  </Element>
);

export default About;