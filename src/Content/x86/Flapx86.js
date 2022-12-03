import React from 'react';
import {NavLink} from "react-router-dom";

function Author(){
    return(
        <div  style={{color:"white",fontSize:"17px",display:"flex",justifyContent:"space-between",padding:"10px"}}>
            <div draggable={false} className="" title="Visit Youtube Channel" onClick={function(){
                     var x = document.createElement('a');
                     x.href="https://www.youtube.com/channel/UCVYclxop0utX10SW0kOK9Ig";
                     x.click();}}>
                <img src="https://thelinuxpoint.github.io/youtube.dark.min.svg" alt="youtube" style={{'height':'30px','width':'30px'}}/>
            </div>
            <div draggable={false} className="" title="Visit Github" onClick={function(){
                    var x = document.createElement('a');
                     x.href="https://github.com/thelinuxpoint";
                     x.click();}}>
                <img src="https://thelinuxpoint.github.io/github.dark.min.svg" alt="github" style={{'height':'30px','width':'30px'}}/>
            </div>
        </div>
    );
}
// 
function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-x86')[0].style.left="-300px";
		if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
            	}
	}
}
//
function Flapx86(props){
	
	return(
		<>
		<div className="flap-x86">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/x86.png" style={{width:"150px",height:"150px"}}/>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/x86/concept" onClick={slideIN}  className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/x86/cpu_architecture" onClick={slideIN}  className="descr"><p>CPU architecture</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/x86/memory_architecture" onClick={slideIN}  className="descr"><p>Memory management</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/x86/segmentation" onClick={slideIN}  className="descr"><p>Segmentation</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/x86/pagging" onClick={slideIN}  className="descr"><p>Pagging</p></NavLink>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}

export default Flapx86;
