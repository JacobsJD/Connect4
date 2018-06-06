import React from 'react';
import Segment from './Segment.jsx';

export default class Row extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            row: props.row,
            index: props.index,
            currentTurn: props.currentTurn,
            logSegmentPosition: props.logSegmentPosition,
            matrix: props.matrix
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.row.map( (segment, index) => (
                        <Segment logSegmentPosition={this.state.logSegmentPosition} currentTurn={this.state.currentTurn} position={[this.state.index, index]} matrix={this.state.matrix} key={Math.random(0,100)*Math.random(0,100)}/>
                    ))
                }
            </div>
        )
    }
}