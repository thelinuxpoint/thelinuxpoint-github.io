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

export default function ClassJava(){
    window.scrollTo(0,0);

    return(
        <>
            <Helmet>
                <title>Java - Classes</title>
                <meta name="description" content="learn how to declare java class " />
            </Helmet>
            <Head name="Java Class"/>
            <br/>
            <Navigator left="" right=""/>
        </>
    );
}