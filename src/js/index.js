'use strict';

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.js');
require('css/_site.scss');

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
/*import { createStore } from 'redux'
import { Provider } from 'react-redux'*/
import App from './components/app'

const store = createStore( () => {}, {})


render(
    <App />, document.getElementById('app')
)