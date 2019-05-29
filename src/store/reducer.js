// 笔记本存放对store的一系列的操作
// state store里的数据

import { ADD_LIST_ITEM, DELETE_LIST_ITEM, CHANGE_INPUT_VALUE, INIT_LIST } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}
// state store里原有值
// action 对store值进行的操作信息
// reducer 可以接收state,但不可以改变state
// return 返回给store,store自己改变自己的内容
// reducer 是个纯函数：给定固定的输入，就有固定的输出，并且不会有副作用（对传入的参数不会有修改操作）
export default (state = defaultState, action) => {
    if( action.type === CHANGE_INPUT_VALUE ) {
        const newState = JSON.parse(JSON.stringify(state)); // 深拷贝，不能对state直接操作
        newState.inputValue = action.value;
        return newState;
    }
    if( action.type === ADD_LIST_ITEM ) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if( action.type === DELETE_LIST_ITEM ) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState;
    }
    if( action.type === INIT_LIST ) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value
        return newState
    }
    // console.log(state,action);

    return state;
}