/**
 * Author：likon
 * Create Date：2017/1/16
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */ 
console.log("111");

import React from 'react'
import {createStore,applyMiddleware} from 'redux'
import ReactDom from 'react-dom'
import {Provider,connect} from 'react-redux'
import createLogger from 'redux-logger'
import {createAction,createReducer} from 'redux-act'
import App from '../src/component/App'


const container=document.createElement("div")
document.body.appendChild(container)

//const store=createStore((s={},a)=>s)
const act1=createAction();
const act2=createAction();

const reducers=createReducer(
    {
        [act1]:s=>s,
        [act2]:s=>s
    },{}
)

const store=createStore(reducers,applyMiddleware(createLogger));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    container
)

