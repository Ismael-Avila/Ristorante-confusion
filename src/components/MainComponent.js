import React, {Component} from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';   //To nav between diferent views

import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Home from "./HomeComponent"
import Contact from "./ContactComponent"


/*So that, the main component is now responsible fore verything related to
the state of my application*/

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  /*
  Note:

  If you're not going to pass parameters to the components, then you can use the next
  sintaxis:

  <Route path='/home' component={()=><Home/>} /> or
  <Route exact path='/contactus' component={Contact}/>

  But if you need to pass parameters to the function, then you need to use this sintaxis:
  <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />


  */
  render(){
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/home' component={() => <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}
          comments={this.state.comments} />} />
          <Route exact path='/contactus' component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
    
  }
} 


export default Main;
