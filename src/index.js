import { App } from './components/App';
import React from 'react';
import { render } from 'react-dom';

import "./styles.sass";

render(<App />,
    document.querySelector('#app')
)
