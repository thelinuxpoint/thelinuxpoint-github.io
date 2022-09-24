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
function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-java')[0].style.left="-300px";
		if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
            	}
	}
}
function FlapJava(props){
	return(
		<>
		<div className="flap-java">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/java.png" style={{width:"150px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink to="/java/intro" onClick={slideIN}  className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/java/token" onClick={slideIN}  className="descr"><p>Tokens & Keywords</p></NavLink>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink to="/java/statements" onClick={slideIN}  className="descr"><p>Statements</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/java/packages" onClick={slideIN}  className="descr"><p>Modules & Package</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/java/classes" onClick={slideIN}  className="descr"><p>Classes</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/java/classes" onClick={slideIN}  className="descr"><p>Abstract Classes</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/java/packages" onClick={slideIN}  className="descr"><p>Interface</p></NavLink>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}

export default FlapJava;
