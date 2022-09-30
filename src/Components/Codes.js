import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import ReactEmbedGist from 'react-embed-gist';
import ReactMarkdown from 'react-markdown'

function Codes(props){

	let cc = props.cc.split(" ")
	let lang = []
	let codeblock = []
	let count = 0
	
	for ( let j of props.lang.split(" ") ){
		let s = cc[count]
		lang.push(
			<div id={cc[count]}
				onClick={
					function(){
						let ele = document.getElementById(s+"-"+"code")
						for ( let i of cc){
							if( i == s ){
								continue
							}
							document.getElementById(i+"-"+"code").hidden=true
							document.getElementById(i).style.border="none"


						}
						if(ele.hidden){
							ele.hidden = false

							let brdr = document.getElementById(s).style.borderBottom = "3px solid cyan"

						}

					}
				}>
				<p>{j}</p>
			</div>

		);

		count+=1
	}
	count=0
	for ( let k of cc ){
		codeblock.push(<div className="put-in-side-code" hidden={true} id={cc[count]+"-"+"code"} ><ReactEmbedGist gist={"thelinuxpoint/"+k}/></div>)
		count+=1

	}

	useEffect(() => {   
			document.getElementById(cc[0]).click() 
		});
	return (

		<>
			<div className="put-in-side-code code-lang-holder">
				{lang}
			</div>
			{codeblock}

		</>
	);
}

export default Codes;