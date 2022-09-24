import React from 'react';
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
/*@@@@@@  ---- OUR IMPORTS ----  @@@@@@*/
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";
import Navigator from "../../Components/Navigator";
import SCard from "../../Components/SCard";

export default function TypesJava(){
	window.scrollTo(0,0)

    return (
        <>
			<Helmet>
        		<title>Java - Tokens & Keywords</title>
        		<meta name="description" content="learn types of java statements " />
	      	</Helmet>
		    <Head name="Comments"/>
			<Mark desc=" There are two kinds of comments: tlp:br tlp:br 
				tlp:codes
				/* (1) my multiline comment comment */ tlp:br tlp:br 
				// (2) my single line comment
				tlp:codee
			"/>
		    <Head name="Literals"/>
            
			<Head name="Operators"/>
			<Table head="Java Operators" colsp={2} desc="-  + | - Addition |;- ++  | - Increment |;- 
			< | - Less than |;- > | - Greater than |;-
			"/>

			<Head name="Keywords in JAVA"/>
            <div className="card-holder-s">
			    <SCard topic="abstract" desc="can be used to create abstract classes"/>	
                <SCard topic="assert" desc=""/>	
			    <SCard topic="boolean" desc=""/>	
			    <SCard topic="break" desc=""/>	
			    <SCard topic="byte" desc=""/>
                <SCard topic="case" desc=""/>	
			    <SCard topic="catch" desc=""/>	
			    <SCard topic="char" desc=""/>	
			    <SCard topic="class" desc=""/>	
			    <SCard topic="const" desc=""/>	
                <SCard topic="continue" desc=""/>	
			    <SCard topic="default" desc=""/>	
			    <SCard topic="do" desc=""/>
				<SCard topic="double" desc=""/>
			    <SCard topic="else" desc=""/>
			    <SCard topic="enum" desc=""/>
			    <SCard topic="extends" desc=""/>
			    <SCard topic="final" desc=""/>
			    <SCard topic="finally" desc=""/>
			    <SCard topic="float" desc=""/>
			    <SCard topic="for" desc=""/>
			    <SCard topic="if" desc=""/>
			    <SCard topic="goto" desc=""/>
			    <SCard topic="implements" desc=""/>
			    <SCard topic="import" desc=""/>
			    <SCard topic="instanceof" desc=""/>
			    <SCard topic="int" desc=""/>
			    <SCard topic="interface" desc=""/>
			    <SCard topic="long" desc=""/>
			    <SCard topic="native" desc=""/>
			    <SCard topic="new" desc=""/>
			    <SCard topic="package" desc=""/>
			    <SCard topic="private" desc=""/>
			    <SCard topic="protected" desc=""/>
			    <SCard topic="public" desc=""/>
			    <SCard topic="return" desc=""/>
			    <SCard topic="short" desc=""/>
			    <SCard topic="static" desc=""/>
			    <SCard topic="strictfp" desc=""/>
			    <SCard topic="super" desc=""/>
			    <SCard topic="switch" desc=""/>
			    <SCard topic="synchronized" desc=""/>
			    <SCard topic="this" desc=""/>
			    <SCard topic="throw" desc=""/>
			    <SCard topic="throws" desc=""/>
			    <SCard topic="transient" desc=""/>
				<SCard topic="try" desc=""/>
			    <SCard topic="void" desc=""/>
			    <SCard topic="volatile" desc=""/>
				<SCard topic="while" desc=""/>
		    </div>
			<br/>
			<Navigator left="" right=""/>
        </>
    );
}