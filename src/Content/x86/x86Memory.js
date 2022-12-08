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
//
export default function X86Memory(){
	window.scrollTo(0,0)
	return(
		<>
			<Helmet>
        		<title>x86 Memory management</title>
        		<meta name="description" content="Learn basics about Assembly Programming" />
	      	</Helmet>
			<Head name="Memory Addressing"/>
			<Mark desc="tlp:org ⌾ Logical Addresses tlp:br tlp:br A logical address is a reference into a segmented-address space. It is comprised
			of the segment selector and the effective address. Notationally, a logical address is represented as tlp:br tlp:br
			Logical Address tlp:red = Segment Selector : Offset tlp:br tlp:br 
			Logical addresses are often referred to as far pointers. Far pointers are used in software addressing
			when the segment reference must be explicit (i.e., a reference to a segment outside the current
			segment)."/>
			<Mark desc="tlp:org ⌾ Effective Addresses tlp:br tlp:br "/>

			<Mark desc="tlp:org ⌾ Physical Addresses tlp:br tlp:br A physical address is a reference into the physical-address space, typically
			main memory. Physical addresses are translated from virtual addresses using page-translation
			mechanisms."/>
			<Head name="Memory Organization"/>
			<Mark desc="tlp:org ⌾ Virtual Addresses tlp:br tlp:br Software uses virtual addresses to access locations within the virtual-memory
			space. System software is responsible for managing the relocation of applications and data in virtual-
			memory space using segment-memory management."/>
			
			<Head name="Operating Modes"/>
			<div align="center"><img style={{borderRadius:"0px",filter:"invert()"}} src="https://thelinuxpoint.github.io/x86modes.png" className="put-in-side-code"/></div>

			<br/>
			<Navigator left="/cpp/intro/" right="/cpp/keywords"/>
		</>
	);
}
