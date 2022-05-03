import React from 'react';
import { } from 'reactstrap';

class Bar extends React.Component {
	
	
	
    constructor(props){
      super(props);
	  let height = props.value * 1.75;
      this.state = {
        height : height,
		value: props.value,
		
      }
    }
    componentDidMount(){
      setTimeout(() => {
        }, 1000);
    }
    render() {
        let sideBarStyle = {
            'backgroundColor': 'lightblue',
			'flexGrow': 1,
			'flexShrink': 0,
			'flexBasis': '20px',
			'minWidth': '5px',
			'height': this.state.height,
          }

        return (
			<div style={sideBarStyle}>
			</div>
        );
    }
}

export default Bar;