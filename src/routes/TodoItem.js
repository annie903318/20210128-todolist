import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Button, Space } from 'antd';

export default class TodoItem extends Component{
    //運用List傳過來的delete
    delete = () => {
        const {todo,deleteTodo}=this.props;
        deleteTodo(todo);
    }
    //運用List傳過來的editTodo
    edit = () => {
        const {todo,editTodo}=this.props;
        var newTodo = prompt("修改代辦事項",todo);
        if(newTodo!==null && newTodo!==""){
            editTodo(todo,newTodo);
        }
    }



    render(){
        const {todo}=this.props;
        return(
            <div>
                <Space style={{margin: '0.5rem 0'}}>
                    {todo}
                    <Button type="primary" onClick={this.edit}>修改</Button>
                    <Button type="primary" danger onClick={this.delete}>刪除</Button>
                </Space>
            </div>
        );
    }
}