import React from 'react';
import Header from './Components/Header/Header'

import './styles.less';

const App = () =>(
    <div className="app-container">
        App container - global styles
        <div className="header">
            <Header/>
            <p>Header container with global styles. This container has also <code>header</code> className.
                But component above use has own modules styles and generates unique class name</p>
        </div>
    </div>
);

export default App;
