/*Comment class*/
/*imports*/
import React from 'react';

export default class Comment extends React.Component{
	render(){
		return(
      //this.props = component property | title = property (./App.js)
      <h4>{ this.props.text }</h4>
		);
	}
}
