import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context'

import Auth0ProviderWithHistory from './auth0-provider-with-history';

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
