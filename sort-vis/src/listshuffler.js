import React, { useState } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import shuffle from 'lodash.shuffle'

export default class ListShuffler extends React.Component {
	
	constructor(props) {
		super(props);

		let initArray = Array.from({length: 20}, () => Math.floor((Math.random(1, 100) * 100) + 1));
		this.state = {
		  data : [1,2,3,4,5,6,7,8,9,10],
		};
		this.shuffleList = this.shuffleList.bind(this);
	}
	
	shuffleList() {
		let shuffledData = shuffle(this.state.data);
		console.log(shuffledData);
		this.setState({
			data: shuffledData
		});
	}

	render() {
		return (
			<Flipper flipKey='abcdef'>
			  <button onClick={this.shuffleList}> shuffle</button>
			  <ul className="list">
				{this.state.data.map((d, index) => (
				  <Flipped key={index} flipId={d}>
					<li>{d}</li>
				  </Flipped>
				))}
			  </ul>
			</Flipper>
		)
	}
  
}