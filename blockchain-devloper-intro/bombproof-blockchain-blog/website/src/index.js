import React from 'react';
import ReactDOM from 'react-dom';
import { Drizzle } from "drizzle";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Blog from './abi/Blog.json'

const options = {
  contracts: [Blog],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
};
const drizzle = new Drizzle(options);

ReactDOM.render(<App drizzle={drizzle}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
