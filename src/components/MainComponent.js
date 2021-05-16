import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';   //To nav between diferent views
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Home from "./HomeComponent"


/*So that, the main component is now responsible fore verything related to
the state of my application*/

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      dishes:DISHES,
    };
  } 

  //<Menu dishes={this.state.dishes} selected={(dishId)=>this.onDishSelect(dishId)}/>
  render(){
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/home' component={()=><Home/>} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
    
  }
} 


export default Main;
