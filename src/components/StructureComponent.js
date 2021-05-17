import React, {Component} from 'react'



import NameClass from ".src/StructureComponent.js"

	render(){
		return(
			<div className="container">
        <div className="row">
          Hello React!!!
          <NameClass variable={dataToBePassed}/>
        </div>
      </div>
		);
	}




class NameClass extends Component{

	//Here props are the parameters the component it's receiving when is called
	//in other part of the code.
	constructor(props){
		super(props);

		//Parameters to be tracked in this component called "NameClass"
    this.state = {
    	variableToBeTracked: variable1,
    	variableToBeTracked2: variable2,
    	variableToBeTrackedN: variableN,
    };
	}

	/*Notes
		1.- If you're receiving parameters (props) and you have a local state to track.Then
		to call or access to props, states and functions, you need to make use of this sintaxis
		-- this.state.
		-- this.props.
		-- this.MyLocalFunctionWithRender
	*/

	MyLocalFunctionWithRender(parameters){
		//ApectsToBeModified
		/* Here, you can use the Local Function to modified states and render other components.
		Examples:
		1.- this.setState({ selectedDish: dishId_}); //Modify states
		2.- return(
	        <DishDetail dish ={dish}/>	//Render other components (secundary render component)
	      );
		*/
	}

	//Main render component
	//In this component you're going to return the main aspect or render the page needs.
	render(){
		return(
			<div className="container">
        <div className="row">
          Hello React!!!
          {this.MyLocalFunctionWithRender(this.props.)}
        </div>
      </div>
		);
	}
	//If you're going to call a local function (that is rendering) use this sintaxis
	// {this.MyLocalFunctionWithRender(this.props.)}
}

//After of all, you need to export the component to be used in other piece of code.
export default NameClass;

//======================================================================================

render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="container">
	        <div className="row">
	          Hello React!!!
	          {()=>this.MyLocalFunctionWithRender(this.props.)}
	        </div>
	      </div>
      );
    });
  }


//======================================================================================


import React from 'react';

function RenderFunction({parameterToReceive}){
	return(
		<div className="col-12 col-md-5 m-1">
			Content
		</div>
	);

}

const NameComponentToExport = (props)=>{

	return(
		<div class = "container">
			<div className="row">
				<RenderDish parameterToReceive ={props.dish}/>
			</div>
		</div>
	);
}

export default NameComponentToExport;



import React from 'react'

function RenderFunction(props){
	<div class = "container">
		<div className="row">
			Content 
		</div>
	</div>	
}
export default RenderFunction;