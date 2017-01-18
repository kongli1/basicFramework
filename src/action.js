/**
 * Author：likon
 * Create Date：2017/1/16
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */ 
export const ADD_TODO='ADD_TODO';
export const COMPLETE_TODO='COMPLETE_TODO';
export const SET_VISIBILITY_FILTER='SET_VISIBILITY_FILTER';

export const VisibilityFilters={
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'

}

export function addTodo(text){
    return {type:ADD_TODO,text}
}

export function completeTodo(index){
    return {type:COMPLETE_TODO,index}
}