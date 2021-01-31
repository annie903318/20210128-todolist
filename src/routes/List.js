import React,{Component} from 'react';
import TodoItem from './TodoItem';
import 'antd/dist/antd.css';
import { Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default class List extends Component{
    state={
        todos:["看一本書","運動30分鐘","看voice tube 10 min","學習JS","學習React"]
    }
    //新增
    AddTodo = () =>{
        const {todos}=this.state;
        const inp=document.getElementById("inp").value;
        this.setState({
            todos: [...todos, inp]
        });
    }
    //刪除
    DeleteTodo = (temp) =>{
        const {todos}=this.state;
        var array = [...todos];
        const index = array.indexOf(temp);
        array=array.filter(function(item,index,array){
            return item!==temp;
        });
        this.setState({todos: array});
    }
    //尋找
    SearchTodo = () =>{
        const {todos}=this.state;
        const inp=document.getElementById("inp").value;
        let cnt=false;
        todos.filter((item, index, array) => {
            if(item===inp){
                alert(`No.${index+1} : ${inp}`);
                cnt=true;
            }
        });
        if(cnt===false){
            alert("Not Found");
        }
    }
    //修改
    EditTodo = (oldTodo,newTodo) =>{
        const {todos}=this.state;
        const array = [...todos];
        const index = array.indexOf(oldTodo);
        array[index]=newTodo;
        this.setState({todos: array});
    }
   

        
     
    
    
    render(){
        const {todos}=this.state;
        return(
            <div>
                <h2>TodoList</h2>
                <Space>
                    <Input id='inp' placeholder="輸入代辦事項" />
                    <Button onClick={this.AddTodo} style={{ background: "#5cdbd3" ,color: "#fff"}}>新增</Button>
                    <Button icon={<SearchOutlined />} onClick={this.SearchTodo}>尋找</Button>
                </Space>

                {todos.map(todo => (
                    <TodoItem todo={todo} deleteTodo={this.DeleteTodo} editTodo={this.EditTodo}/>
                ))}
            </div>
        );
    }
}