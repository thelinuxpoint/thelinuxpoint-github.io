import React from 'react';
import {NavLink} from "react-router-dom";
function Author(){
    return(
        <div  style={{color:"white",fontSize:"17px",display:"flex",justifyContent:"space-between",padding:"10px"}}>
            <div draggable={false} className="" title="Visit Youtube Channel" onClick={function(){
                     var x = document.createElement('a');
                     x.href="https://www.youtube.com/channel/UCVYclxop0utX10SW0kOK9Ig";
                     x.click();}}>
                <img src="youtube.dark.min.svg" alt="youtube" style={{'height':'30px','width':'30px'}}/>
            </div>
            <div draggable={false} className="" title="Visit Github" onClick={function(){
                    var x = document.createElement('a');
                     x.href="https://github.com/thelinuxpoint";
                     x.click();}}>
                <img src="github.dark.min.svg" alt="github" style={{'height':'30px','width':'30px'}}/>
            </div>
        </div>
    );
}
function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-php')[0].style.left="-300px";
		if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
            	}
	}
}
function FlapPHP(props){
	return(
		<>
		<div className="flap-php">
			<div className="display">
				<img src="php.svg" style={{width:"200px",height:"200px"}}/>
			</div>
            <div className="topic">
				<NavLink to="/php/intro" onClick={slideIN}  className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}

export default FlapPHP;
