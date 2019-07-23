import _ from "lodash";
import MyStyle from "./index.css"

var mydiv = document.getElementById('root');
mydiv.className = "divBgColor";
mydiv.setAttribute("class","color");

console.log(mydiv.getAttribute("CLASS"));
mydiv.onclick = function(){
	this.innerHTML = "hello world!"
}


