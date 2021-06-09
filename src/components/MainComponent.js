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

//--importing our actions to be used in the main component
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

import { actions } from 'react-redux-form'; //Actions for the form

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

//Where we are going to dispath all our reducers
const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

/*Inside this component (class Main extends Component) all the Redux state becomes available as "props"
hence the mapStateToProps and mapDispatchToProps*/

/*So that, the main component is now responsible for everything related to
the state of my application*/

class Main extends Component{
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render(){

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            addComment={this.props.addComment}
          />
      );
    };

    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/home' component={() => <Home 
            dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMess}
            promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
            promoLoading={this.props.promotions.isLoading}
            promoErrMess={this.props.promotions.errMess}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />} />

          <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/>} />

          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}
          comments={this.props.comments} />} />

          <Route path='/menu/:dishId' component={DishWithId} />

          <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
