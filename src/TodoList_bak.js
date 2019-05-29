import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, List } from 'antd';
import store from './store'
// import { ADD_LIST_ITEM, DELETE_LIST_ITEM, CHANGE_INPUT_VALUE } from './store/actionTypes'
import { getInputChangeAction, getDeleteListItemAction, getAddListItemAction } from './store/actionCreators'
class TodoList extends Component {
  constructor (props){
    super(props);
    // console.log(store.getState())
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
      <div style={{ padding: '20px' }}>
          <Input 
            value={ this.state.inputValue } 
            placeholder='请输入内容' 
            style={{ width:'300px', marginRight: '10px' }}
            onChange={ this.handleInputChange }
          />
          <Button 
            type="primary"
            onClick={ this.handleListChange }
          >提交</Button>
          <List 
            bordered 
            dataSource={ this.state.list } 
            style={{ width:'300px', marginTop: '10px' }}
            renderItem={ (item,index) => 
              ( <List.Item 
                  onClick={ this.handleItemDelete.bind(this,index) }
                > 
                {item} 
                </List.Item> 
              )} 
          />
      </div>
    )
  }

  handleInputChange(e){
    // console.log(e.target.value)
    /*
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    */
    const action = getInputChangeAction(
      e.target.value
    )
    store.dispatch(action)
  }

  handleListChange(){
    /*
    const action = {
      type: ADD_LIST_ITEM
    }
    */
    const action = getAddListItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index){
    // console.log(index)
    /*
    const action = {
      type: DELETE_LIST_ITEM,
      index
    }
    */
    const action = getDeleteListItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(
      store.getState()
    )
  }
}

export default TodoList;
