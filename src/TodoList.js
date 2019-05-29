import React, { Component } from 'react';
import store from './store'
import TodoListUI from './TodoListUI'
import { getInputChangeAction, getDeleteListItemAction, getAddListItemAction, getTodoList } from './store/actionCreators'

class TodoList extends Component {
  constructor (props){
    super(props);
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleListChange = this.handleListChange.bind(this)
    // 订阅
    // 监听store数据变化
    store.subscribe(this.handleStoreChange)
  }

  render(){
    return (
        <TodoListUI 
            inputValue = { this.state.inputValue } 
            list = { this.state.list }
            handleInputChange = { this.handleInputChange }
            handleListChange = { this.handleListChange }
            handleItemDelete = { this.handleItemDelete }
        />
    )
  }

  handleInputChange(e){
    const action = getInputChangeAction(
      e.target.value
    )
    store.dispatch(action)
  }

  handleListChange(){
    const action = getAddListItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index){
    const action = getDeleteListItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(
      store.getState()
    )
  }

  componentDidMount(){
    const action = getTodoList();
    store.dispatch(action)
  }
}

export default TodoList;
