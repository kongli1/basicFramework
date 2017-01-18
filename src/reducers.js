/**
 * Author：likon
 * Create Date：2017/1/17
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */ 

import {combineReducers} from 'redux'
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters} from './action'

const {SHOW_ALL}=VisibilityFilters

function visibilityFilter(state=SHOW_ALL,action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }

}

function todos(state=[],action) {
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }
            ]
        case COMPLETE_TODO:
            return [
                ...state.slice(0,action.index),
                Object.assign({},state[action.index],
                    {completed:true}),
                ...state.slice(action.index+1)
            ]
        default:
            return state
    }

}

const todoApp=combineReducers({
    visibility,
    todos:undoable(todos,{filter:undoable.distinctState()})
})

export default todoApp