import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Bar from './bar.js';
import { BsCaretRight, BsCaretLeft, BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from "react-icons/bs";

export default class ItemSorter extends React.Component {
	
	constructor(props) {
		super(props);
		
		let n = parseInt(props.numElems, 10);
		let initArray = Array.from({length: n}, () => Math.floor((Math.random(1, 100) * 100) + 1));
		let iterations = []
		iterations.push(initArray);
		this.state = {
		  values: initArray,
		  iterations: iterations,
		  itNum: 0,
		};
		this.mergeSort = this.mergeSort.bind(this);
		this.enactMerge = this.enactMerge.bind(this);
		this.handleIteration = this.increaseIteration.bind(this);
	}
	
	increaseIteration() {
		if(this.state.itNum < this.state.iterations.length - 1) {
			let iterationNumber = this.state.itNum + 1;
			this.setState({itNum: iterationNumber})
		}
		
	}
	
	decreaseIteration() {
		if(this.state.itNum > 0) {
			let iterationNumber = this.state.itNum - 1;
			this.setState({itNum: iterationNumber});
		}
		
	}
	
	enactMerge() {
		let res = this.mergeSort(this.state.values.slice(), this.state.values.length);
		let curr = this.state.iterations[0];
		res.unshift(curr);
		this.setState({iterations: res});
	}
  
	mergeSort(arr , n) {
 
		var iterations = [];
        // For current size of subarrays to
        // be merged curr_size varies from
        // 1 to n/2
        var curr_size;
 
        // For picking starting index of
        // left subarray to be merged
        var left_start;
 
        // Merge subarrays in bottom up
        // manner. First merge subarrays
        // of size 1 to create sorted
        // subarrays of size 2, then merge
        // subarrays of size 2 to create
        // sorted subarrays of size 4, and
        // so on.
        for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
 
            // Pick starting point of different
            // subarrays of current size
            for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
                // Find ending point of left
                // subarray. mid+1 is starting
                // point of right
                var mid = Math.min(left_start + curr_size - 1, n - 1);
 
                var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
 
                // Merge Subarrays arr[left_start...mid]
                // & arr[mid+1...right_end]
                let res = this.merge(arr, left_start, mid, right_end);
				iterations.push(res);
            }
        }
		return iterations;
    }
	
	merge(arr , l , m , r) {
        var i, j, k;
        var n1 = m - l + 1;
        var n2 = r - m;
 
        /* create temp arrays */
        var L = Array(n1).fill(0);
        var R = Array(n2).fill(0);
 
        /*
         * Copy data to temp arrays L and R
         */
        for (i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
 
        /*
         * Merge the temp arrays back into arr[l..r]
         */
        i = 0;
        j = 0;
        k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
 
        /*
         * Copy the remaining elements of L, if there are any
         */
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
 
        /*
         * Copy the remaining elements of R, if there are any
         */
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
		
		return arr.slice();
    }
  
  render() {
	let containerStyle = {
		'height': '100%',
		'display': 'table',
		'fluid': 'true'
	}

	let rowStyle = {
		'height': '100%',
		'width': '100%',	
	}

	let barStyle = {
		'bottom': 0,
		'position': 'absolute',
		'width': '100%'
	}
	
	let sideBarStyle = {
		'backgroundColor': '#E2E2E2',
		'height': 300,
	}
	
	let caratStyle = {
		'cursor': 'pointer',
	}
	
	return (
		<div>
			<div className="windowDiv" > 
				<div className="container-fluid text-dark p-5">
					<div className="container p-5" style={sideBarStyle} >
						<Container style={containerStyle}>
							<Row className="g-0" style={rowStyle}>
								{this.state.iterations[this.state.itNum].map((value) => (
									<Col key={uuidv4()} className="h-100 d-flex justify-content-end align-items-end no-gutters">
										<Bar value={value} style={barStyle}/>
									</Col>
								))}
							</Row>
						</Container>
					</div>
				</div>
			</div>
			<BsFillCaretLeftSquareFill />
			<BsCaretLeft style={caratStyle} onClick={() => this.decreaseIteration()}/>
			<BsCaretRight style={caratStyle} onClick={() => this.increaseIteration()}/>
			<BsFillCaretRightSquareFill onClick={() => this.enactMerge()}/>
		</div>
	)
  }
}