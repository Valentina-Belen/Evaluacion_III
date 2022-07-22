import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Portada from './components/Portada';
import EnviarMensaje from './components/EnviarMensaje';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route path='/portada' component={Portada} />
        <Route path='/EnviarMensaje' component={EnviarMensaje} />
      </Layout>
    );
  }
}
