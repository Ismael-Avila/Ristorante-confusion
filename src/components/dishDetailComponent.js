import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

	constructor(props){
		super(props);
	
		this.state = {
			
		};

	}

	componentDidMount(){
    console.log("DishDetail Component componentDidMount invoked");
  }

  componentDidUpdate(){
  	console.log("DishDetail Component componentDidUpdate invoked");
  }

	renderDish(dish){
		return(
			<div className="col-12 col-md-5 m-1">
				<Card>
	        <CardImg top src={dish.image} alt={dish.name} />  
	        
	        <CardBody>
	          <CardTitle>{dish.name}</CardTitle>
	          <CardText>{dish.description}</CardText>
	        </CardBody>
	      </Card>
			</div>
			
		);

	}

	renderComments(dish){
		if(dish.comments.length !== 0){
			return(
				<div className="col-12 col-md-5 m-1">
					<h4>Comments</h4>
					<ul className = "list-unstyled">
						{dish.comments.map((comment)=>{
							return(
								<div>
									<li key={comment.id}>
										<p>{comment.comment}</p>
										<p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
									</li>
								</div>
							);
						})}
					</ul>
				</div>
			);

		}

		else{
			return(
				<div>
				</div>
			);
		}
	}

	//Functions to work

	render(){

		console.log("DishDetail Component render invoked");
		
		if(this.props.dish != null){
			return(
			<div class = "container">
				<div className="row">
					{this.renderDish(this.props.dish)}
					{this.renderComments(this.props.dish)}
				</div>
			</div>

			);
		}

		else{
			return(
	          <div></div>
	        );
		}
	}
}

export default DishDetail;