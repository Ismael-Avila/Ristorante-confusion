import React, {Component} from 'react';

import { Switch, Route, Redirect, withRouter} from 'react-router-dom';   //To nav between diferent views
//withRouter -- it'll be necessary for configuring my React Component to connec to Redux
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Home from "./HomeComponent"
import Contact from "./ContactComponent"
import About from "./AboutComponent"

import { connect } from 'react-redux';

/*
This main component needs to go and obtain that state from the Redux Store.
So, to do that I need to connect this component to my Redux Store.

Before to do that, I need to define mapSatateToProps

*/

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

/*Inside this component (class Main extends Component) all the Redux state becomes available as "props"
hence the mapStateToProps*/

/*So that, the main component is now responsible fore verything related to
the state of my application*/

class Main extends Component{
  constructor(props){
    super(props);

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
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/home' component={() => <Home 
            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />} />

          <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/>} />

          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}
          comments={this.props.comments} />} />

          <Route path='/menu/:dishId' component={DishWithId} />

          <Route exact path='/contactus' component={Contact}/>

          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
    
  }
} 

/*
  Now, to connect the component to the Redux Store we'll go down here,
  and then we will wrap this Main that we define here inside a Connect.
  --
  Connect receives mapStateToProps(function defined earlier) as one of the parameters here.
  Again, it also receives another one column that takes mapDispatchToProps but for the moment
  we don't need it because we are not receiven actions.
  --
  If you using react router, then you need withRouter in order to making functional
  this component

*/

export default withRouter(connect(mapStateToProps)(Main));
