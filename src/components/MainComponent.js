import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './dishDetailComponent';

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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} selected={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail dish ={this.state.dishes.filter((dish_p) => dish_p.id === this.state.selectedDish)[0]}/>
      </div>
    );
    
  }
} 


export default Main;
