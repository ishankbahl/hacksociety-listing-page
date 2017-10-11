import React, { Component } from 'react';
import WrappedComponent from "./ComponentWrappers";

import { Header, HackathonList, Footer } from "./Components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HackathonList />
        <Footer />
      </div>
    );
  }
}

export default WrappedComponent(App);
