import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>(
    <div className="global-class">
        Something with global styles
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
