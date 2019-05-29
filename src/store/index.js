import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'; //笔记本数据操作

const store = createStore(
    reducer,
    applyMiddleware(thunk)
    // window .__ REDUX_DEVTOOLS_EXTENSION__ && window .__ REDUX_DEVTOOLS_EXTENSION __（） 
);

export default store;