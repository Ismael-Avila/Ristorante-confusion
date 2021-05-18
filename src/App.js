import React, {Component} from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

class App extends Component{

	//Here, you're saying The menu page will use BrowRouter

  render(){
    return(
      <BrowserRouter>
      	<div >
	        <Main/>
	      </div>
      </BrowserRouter>
    );
    
  }
} 


export default App;
