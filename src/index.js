import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'containers/App';
import { Auth0Provider } from "./react-auth0-spa";

import config from './auth-config.json';
import { Provider } from 'react-redux';
import store from './store';

import history from "utils/history";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const Root = () => (
  <Provider store={store}>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
