import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, List } from 'antd';

class TodoListUI extends Component {
    render() { 
        return (
            <div style={{ padding: '20px' }}>
                <Input 
                    value={ this.props.inputValue } 
                    placeholder='请输入内容' 
                    style={{ width:'300px', marginRight: '10px' }}
                    onChange={ this.props.handleInputChange }
                />
                <Button 
                    type="primary"
                    onClick={ this.props.handleListChange }
                >提交</Button>
                <List 
                    bordered 
                    dataSource={ this.props.list } 
                    style={{ width:'300px', marginTop: '10px' }}
                    renderItem={ (item,index) => 
                    ( <List.Item 
                        onClick={ this.props.handleItemDelete.bind(this,index) }
                        > 
                        {item} 
                        </List.Item> 
                )} 
                />
            </div>
        )
    }
}

export default TodoListUI;