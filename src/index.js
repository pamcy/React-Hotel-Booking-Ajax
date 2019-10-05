import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import Router from './components/Router';
import './base-styles/index.scss';

Sentry.init({ dsn: 'https://7dcec06e0dbb4e32ad7ab74a4d614723@sentry.io/1770835' });
ReactDOM.render(<Router />, document.getElementById('root'));
