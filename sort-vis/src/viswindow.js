import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './viswindow.css';
import Bar from './bar.js';

export default class VisWindow extends React.Component {
  constructor(props) {
    super(props);
	
	let initArray = Array.from({length: 20}, () => Math.floor((Math.random(1, 100) * 100) + 1));
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
	  values: initArray,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
	let sideBarStyle = {
		'backgroundColor': '#E2E2E2',
		'height': 300,
	}
	
	let containerStyle = {
		'height': '100%',
		'display': 'table',
		'fluid': 'true'
	}
	
	let rowStyle = {
		'height': '100%',
		'width': '100%',	
	}
	
	let colStyle = {
		'position': 'relative',
		'vertical-align': 'bottom',
		'flex': 1,
	}
	
	let barStyle = {
		'bottom': 0,
		'position': 'absolute',
		'width': '100%'
	}
	

    return (
		<div className="windowDiv" > 
			<div className="container-fluid text-dark p-5">
				<div className="container p-5" style={sideBarStyle} >
					<Container style={containerStyle}>
						<Row className="g-0" style={rowStyle}>
							{this.state.values.map((value) => (
								<Col key={value} className="h-100 d-flex justify-content-end align-items-end no-gutters">
									<Bar value={value} style={barStyle}/>
								</Col>
							))}
						</Row>
					</Container>
				</div>
			</div>
		</div>
    );
  }
}