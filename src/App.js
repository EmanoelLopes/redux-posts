import React, { Component, Fragment } from 'react';
import Posts from 'containers/Posts';
import { GlobalStyle, MAIN, H1 } from 'styles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <MAIN className="main-content">
          <H1>Posts</H1>
          <Posts />
        </MAIN>
      </Fragment>
    );
  }
}

export default App;
