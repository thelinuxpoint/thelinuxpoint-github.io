import React from 'react';
import {NavLink} from "react-router-dom";
import Head from "../../Components/Header";
import SCard from "../../Components/SCard";

export default function CppKeywords(){
    return(
        <>
            <Head name="KeyWords in C++" />
            <div className="card-holder-s">
			    <SCard topic="alignas" desc=""/>	
                <SCard topic="alignof" desc=""/>	
			    <SCard topic="and" desc=""/>	
			    <SCard topic="and_eq" desc=""/>	
			    <SCard topic="auto" desc=""/>	

		    </div>
        </>
    );
}