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
import About from "./AboutComponent"


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

    /*
    Other way to call DishDetail

    <Route path='/menu/:dishId' component={({match})=> <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />} />
    */
    const DishWithId = ({match}) => {
      console.log(match.params.dishId);
      console.log(match.params.dishId);
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/home' component={() => <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />} />

          <Route path="/aboutus" component={()=><About leaders={this.state.leaders}/>} />

          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}
          comments={this.state.comments} />} />

          <Route path='/menu/:dishId' component={DishWithId} />

          <Route exact path='/contactus' component={Contact}/>

          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
    
  }
} 


export default Main;
