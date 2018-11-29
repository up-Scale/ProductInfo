import React from 'react';
import { render, hydrate } from 'react-dom';
import ProductInfo from './index.jsx';

hydrate(<ProductInfo {...window.__APP_INITIAL_STATE__}/>, document.getElementById('Info'));

window.Info = ProductInfo;