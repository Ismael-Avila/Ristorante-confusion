import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent'

class Menu extends Component{

  constructor(props){
    super(props);

    this.state = {
      selectedDish:null,
    };
  }

  selectedDishFunction(selectedDish){
    this.setState({
      selectedDish: selectedDish
    });

  }

  RenderMenuItem(dish){
    return(
      <Card key={dish.id} onClick={()=>this.selectedDishFunction(dish)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    );

  }

  render(){
    const menu = this.props.dishes.map((dish) => {
      return (
        <div  className="col-12 col-md-5 m-1">
          {this.RenderMenuItem(dish)}
        </div>
      );
    });


    return(
      <div className="container">
        <div className="row">
          {menu}
        </div>
        < DishDetail dish = {this.state.selectedDish} comments = {this.props.comments}/>
      </div>
    );
  }
}


export default Menu;