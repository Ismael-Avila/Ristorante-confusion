import React, {Component} from 'react';
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"


/*So that, the main component is now responsible fore verything related to
the state of my application*/

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      dishes:DISHES,
      selectedDish: null,
    };
  }

  //Function to change state for this class
  onDishSelect(dishId_  ) {
    this.setState({ selectedDish: dishId_});
    //console.log(dishId_, "papu")
  }


  render(){
    return(
      <div className="App">
        <Header/>
        <Menu dishes={this.state.dishes} selected={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail dish ={this.state.dishes.filter((dish_p) => dish_p.id === this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
    
  }
} 


export default Main;
