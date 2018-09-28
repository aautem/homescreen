import React from 'react'

import Clock from './components/Clock'
import Content from './components/Content'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Month from './components/Month'
import Panel from './components/Panel'

const App = ({ start }) => (
  <main className="App">
    <Header>
      <Month wrapperStyles={{}} />
      <Greeting wrapperStyles={{}} />
    </Header>
    <Content>
      <Panel numberOfColumns={3}>
        <div className="Label Left">48</div>
        <div className="Label Left">32</div>
        <div className="Label Left">16</div>
        <div className="Label Left">0</div>
      </Panel>

      <Panel numberOfColumns={1}>
        <Clock />
      </Panel>

      <Panel numberOfColumns={3}>
        <div className="Label Right">59</div>
        <div className="Label Right">43</div>
        <div className="Label Right">27</div>
        <div className="Label Right">11</div>
      </Panel>
    </Content>
    <Footer />
  </main>
)

export default App
