import React from 'react';

import { GoogleOutlined } from '@ant-design/icons';
import "firebase/app";

import {ContactsOutlined} from '@ant-design/icons';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {FacebookFilled} from '@ant-design/icons';
import  {TwitterSquareFilled} from '@ant-design/icons';
import {InstagramFilled} from '@ant-design/icons';
import {YoutubeFilled}  from '@ant-design/icons';
import {SnippetsOutlined}  from '@ant-design/icons';
import {auth} from '../components/firebase';
import firebase from 'firebase/app';
import { useMediaQuery } from 'react-responsive'


const Login = () => {
	return (
		
			<div id="login-card">
				<h2> Welcome to ChatSquare !! </h2>
				 <h3> Easy, Secure Messaging. 


					With ChatSquare, you'll get fast, simple, secure messaging, available all over the world. </h3>
<div 
					className="login-button google"
					onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
				>
					<GoogleOutlined /> Sign In with Google
				</div>
					<br /> <br />

				<div>
					 <a href="#"> Need Help Getting Started ?? </a>

				</div>
				<div>
					<a href="#"> <QuestionCircleOutlined/> About </a>
				</div>
				
				<div>
					<a href="#"> <ContactsOutlined /> Contact Us </a>
				</div>
				<div>
					<a href="#"> <SnippetsOutlined /> Blog</a>
				</div>

				<br>
				</br>

				<div>
				Follow us on...
				</div>
				<br>
				</br>
				
				
					<div 
					className="login-button google"
					
				><a href="#" ><FacebookFilled  /></a></div>
				&nbsp;
					<div 
					className="login-button google"
					
				><a href="#"> <TwitterSquareFilled /> </a></div>
					&nbsp;<div 
					className="login-button google"
					
				><a href="#"><InstagramFilled /></a></div>
					&nbsp;<div 
					className="login-button google"
					
				><a href="#"> <YoutubeFilled /></a></div>
				

				

				





			</div>
		

	);
}
 export default Login;