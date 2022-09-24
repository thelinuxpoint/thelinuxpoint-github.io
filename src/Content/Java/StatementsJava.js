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

export default function StatementsJava(props){
    window.scrollTo(0,0)

    return(
        <>
            <Helmet>
        		<title>Java - Statements</title>
        		<meta name="description" content="learn types of java statements " />
	      	</Helmet>
            <Head name="The try-catch-finally statement"/>
            <Mark desc="
            A try statement executes a block. If a value is thrown and the try statement has 
            one or more catch clauses that can catch it, then control will be transferred to the 
            first such catch clause.
            tlp:br tlp:br 
            tlp:codes
            tlp:red public tlp:cyan class Test { tlp:br 
                tlp:br
                tlp:tab tlp:red public  tlp:red static tlp:cyan void main( String[] args ) { tlp:br
                    tlp:tab tlp:tab tlp:red try { tlp:br
                        tlp:br 
                    tlp:tab tlp:tab } tlp:red catch ( tlp:cyan RuntimeException r ) { tlp:br 
                    tlp:tab tlp:tab tlp:tab    System.out.println(); tlp:br
                    tlp:tab tlp:tab } tlp:br 
                tlp:tab } tlp:br
            } tlp:br 
            tlp:codee
            "/>
            <Head name="The switch statement"/>
            <Head name="The labelled statement"/>
            <Head name="The break statement"/>
            <Head name="The continue statement"/>
            <Head name="The return statement"/>
            <Head name="The throw statement"/>
            <Head name="The if statement"/>
            <Mark desc="The if statement allows conditional execution of a statement or a 
            conditional choice of two statements, executing one or the other but not both. 
            "/>
            <Head name="The for statement"/>
            <Head name="The while statement"/>
            <Head name="The do statement"/>
            <br/>
            <Navigator left="/java/token" right=""/>
        </>
    );

}