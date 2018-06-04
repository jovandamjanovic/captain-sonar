import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';

import Board from './containers/Board';

import { createStore } from 'redux';
import store from './store';

const appStore = createStore(
    store,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={appStore}>
        <div>
            <Board />
        </div>
    </Provider>, 
    document.getElementById("app")
);

export default 0;