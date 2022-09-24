import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";
import { Helmet } from 'react-helmet';

function Navigator(props){
	return(
		<>
			
			<div className="pg-nav put-in-side-code">
				<div className="pg-nav-in">
					<NavLink to={props.left} className="descr" ><button id="first-btn">❱</button></NavLink>
				</div>
				<div className="pg-nav-in">
					<NavLink to={props.right} className="descr" ><button>❱</button></NavLink>
				</div>
			</div>
		</>
	);

}


export default function IntroJava(){
    return (
        <>
			<Helmet>
        		<title>Java - Introduction</title>
        		<meta name="description" content="introduction to java programming language" />
	      	</Helmet>
			
            <Head name="What is Java?"/>
			<Head name="How Java Works?"/>
            <Head name="Hello World in Java"/>

        </>
    );
}