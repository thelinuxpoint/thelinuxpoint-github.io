import React from 'react';
import {NavLink} from "react-router-dom";
import ReactEmbedGist from 'react-embed-gist';
import {Helmet} from 'react-helmet';

export default function LoginPage(){

	return(
		<>
			<h1>Login to <span style={{"color":"cyan"}}>The Linux Point</span></h1>
			<Helmet>

			</Helmet>
        	<div className="login-tlp">
            	<div id="google-signup">
            	<p>Google</p>
            	</div>
            	
            	<div id="github-signup">
            	<p>GitHub</p>

            	</div>

            	<div id="email-signup">
            	<p>Google</p>

            	</div>
            </div>
		</>

	)
}