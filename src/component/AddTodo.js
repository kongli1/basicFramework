/**
 * Author：likon
 * Create Date：2017/1/16
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */ 
import React from 'react'

export default class AddTodo extends React.Component{
    render(){
        return(
            <div>
                <input type='text' ref='input'/>
                <button onClick={(e)=>this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }
    handleClick(e){
        const node=this.refs.input
        const text=node.value.trim()
        this.props.onAddClick(text)
        node.value=''
    }
}

AddTodo.propTypes={
    onAddClick:React.PropTypes.func.isRequired
}