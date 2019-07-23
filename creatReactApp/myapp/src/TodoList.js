import React from 'react';
// import ReactDOM from "react-dom";
import TodoItem from './TodoItem.js';
import Test from './Test.jsx';
import './style/index.scss';
import axios from 'axios';


class TodoList extends React.Component{
  constructor(){
    super();
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemdelete = this.handleItemdelete.bind(this);
  }

  handleInputChange(){
    const value = this.input.value;
    this.setState(()=> {
      return {
        inputValue: value
      }
  })
    // this.setState({
    //   inputValue: e.target.value
    //旧版写法
    }

  handleBtnClick(){
    this.setState(()=>{
      return {
      list:[...this.state.list, this.state.inputValue],//把数组原来的项目展开，同时添加从input框里获取的新项目。
      inputValue: ""}
    });
  }

  handleItemdelete(index){
    this.setState((prevState)=>{
      const list = [...prevState.list];//拷贝list数组到list中
      list.splice(index, 1);
      return {list}
    });
  }

  getTodoItem(){
    return this.state.list.map((item,index) => {
      return (
        <TodoItem 
        key={item}
        content={item}
        index={index}
        deleteItem={this.handleItemdelete}
        >
        </TodoItem>)
    });
  }

  componentDidMount(){
    axios.get('./api/todolist.js')
    .then(()=>{alert('success')})
    .catch(()=>{alert("fail")})
  }

  render(){
    return <div>
    <label htmlFor="insertArea">输入内容</label>
    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} id="insertArea" ref={ (input) => {this.input = input}}/>
    <button onClick={this.handleBtnClick}>提交</button>
    <ul>
       {this.getTodoItem()}
    </ul>
    <Test content = {this.state.inputValue}></Test>
    </div>
  }
}

export default TodoList;
