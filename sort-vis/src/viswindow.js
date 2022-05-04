import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './viswindow.css';
import Bar from './bar.js';
import ItemSorter from './itemsorter.js';
import SortToolbar from './navbar.js';

export default class VisWindow extends React.Component {
  constructor(props) {
    super(props);
	
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
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

    return (
	<div>
		<SortToolbar />
		<ItemSorter numElems={15} />
		<div className="container-fluid">
			<Button > CHECK </Button>
		</div>
	</div>

    );
  }
}