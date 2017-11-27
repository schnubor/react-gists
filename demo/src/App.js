import React, { Component } from 'react'
import Gist from 'react-gists'
import { Section, Container, Hero, Title, SubTitle } from 'reactbulma'

class App extends Component {
  render () {
    return (
      <div>
        <Hero info bold>
          <Hero.Body>
            <Container>
              <Title>react-gists <span role="img" aria-label="">📋</span></Title>
              <SubTitle>Embed Gists into React applications.</SubTitle>

              <Section>
                <div className="columns">
                  <div className="column is-4 is-offset-4">
                    <div style={{boxShadow: '0 0 30px rgba(0,0,0,.2)'}}>
                      <Gist id="256aa62cc266a175f42af371ac012fb6" file="install"/>
                    </div>
                  </div>
                </div>
              </Section>
            </Container>
          </Hero.Body>
        </Hero>

        <Section>
          <Container>
            <div className="columns">
              <div className="column is-5">
                <Title is="5">Whole Gist</Title>
                <Gist id="af32e9ef9cfa159aaa89acea3eed4bb2"/>
              </div>
              <div className="column is-6 is-offset-1">
                <Title is="5">Single File</Title>
                <Gist id="af32e9ef9cfa159aaa89acea3eed4bb2" file="example2.rbx"/>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    )
  }
}

export default App
