import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)//这样绑定之后this就永远指向TodoItem组件
	}
	render(){
		const { content } = this.props;//结构化赋值
		return <div onClick={this.handleClick}>{ content }</div>
	}
	handleClick(){
		const { deleteItem, index} = this.props;//结构化赋值，deleteItem、index都是外界传入的属性
		deleteItem(index);
		// this.props.deleteItem(this.props.index)//原来的写法
	}
}

TodoItem.propTypes = {
	content: PropTypes.string.isRequired,
	test: PropTypes.string.isRequired
}
TodoItem.defaultProps = {
	test: "My Cat",
	content: "我的测试"
}

export default TodoItem;