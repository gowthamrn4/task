import React, { useEffect} from 'react';
import './index.css';

function Input({icon,title,onChange,value,className,type}) {

 useEffect(()=>{
        const inputs = document.querySelectorAll(".input");
        inputs.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
        }); 
 },[value])

 function addcl(e){
        let parent = e.target.parentNode.parentNode;
        parent.classList.add("focus");
 }

 function remcl(e){
        let parent = e.target.parentNode.parentNode;
        if(value == "" ){
            parent.classList.remove("focus");
        }
 }


  return (
    <div className={"input-div " + className}>
        <div className="i">
                <i className={"fas "+icon}></i>
        </div>
        <div className="div">
                <h5>{title}</h5>
                <input type={type} value={value} className="input" onChange={onChange}/>
        </div>
    </div>
  );
}

export default Input;
