import React from 'react';
import {NavLink} from "react-router-dom";
import FLapx86 from "./Flapx86"



function Homex86(props){
	return(
		<>
		<div className="">
			<FLapx86/>
			
            <div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-x86')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-x86')[0].style.left="-300px"
            	}
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>
		</div>
		</>
	);
}

export default Homex86;
