import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-2mgbgxm3b0scb3xq.us.auth0.com"
    clientId="S4zFLUKFSV6o36kAUGrsi4EiHSFuxnff"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);