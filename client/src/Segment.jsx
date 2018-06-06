import React from 'react';

export default class Segment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentTurn: props.currentTurn,
            position: props.position,
            logSegmentPosition: props.logSegmentPosition,
            matrix: props.matrix,
        }
    }

    updateTurnHoverClick() {
        this.setState({
            currentTurn: window.turn
        })
    }

    updateTurnHover() {
        this.setState({
            currentTurn: window.turn
        })
    }

    render() {  
        return (
            <span>
                <span onMouseEnter={() => this.updateTurnHover()} onClick={() => this.state.logSegmentPosition(this.state.position) & this.updateTurnHoverClick()} className={`segment${this.state.matrix[this.state.position[0]][this.state.position[1]]}${Number(this.state.currentTurn)}`}></span>
            </span>
        )
    }
}