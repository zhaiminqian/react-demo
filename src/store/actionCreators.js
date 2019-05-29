import axios from 'axios'
import { ADD_LIST_ITEM, DELETE_LIST_ITEM, CHANGE_INPUT_VALUE,INIT_LIST } from './actionTypes'
const host = 'http://localhost:3001'


export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddListItemAction = () => ({
    type: ADD_LIST_ITEM
})

export const getDeleteListItemAction = (index) => ({
    type: DELETE_LIST_ITEM,
    index
})

export const getInitListAction = (value) => ({
    type: INIT_LIST,
    value
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get(`${host}/list`).then((res)=>{
            const data = res.data.list
            const action = getInitListAction(data)
            // console.log(action)
            // console.log(dispatch)
            dispatch(action)
        })
    }
}