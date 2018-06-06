import React from 'react';
import Segment from './Segment.jsx';
import Row from './Row.jsx';
import Profile from './Profile.jsx';
import axios from 'axios';
window.turn = 1;

window.catBoard = [[1,1,1,1,1,1,1],
[1,1,3,1,3,1,1],
[1,1,3,3,3,1,1],
[1,3,2,1,2,3,1],
[1,3,1,1,1,3,1],
[1,1,3,3,3,1,1] 
    ]

window.tieBoard = [[0,1,2,1,2,2,2],
[2,2,1,2,2,1,1],
[1,1,2,2,1,2,1],
[2,1,1,1,2,1,2],
[1,2,2,1,1,1,2],
[1,2,1,2,2,2,1]
    ]

window.emptyBoard = [[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0]
]

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matrix:[[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
            ],
            currentTurn: window.turn,
            warning: false,
            victory: false,
            winner: 'Joshua',
            tie: false,
            cPosition: null,
            redVictories: window.redVictoryCount,
            blueVictories: window.blueVictoryCount
        }
    }

    //Animation
    trickleDownEffect(position, desired) {
        // Takes in the column in which the piece was placed
        //Lights up the segments from top to bottom in intervals
        //Stops once in the desired position
    //     this.flashPieceOn()        
    }

    flashPieceOn(position) {
        let flashMatrix = this.state.matrix;
        flashMatrix[0][position[1]] = this.state.currentTurn
        this.setState({
            matrix: flashMatrix,
            cPosition: position
        })
        setTimeout(this.flashPieceOff.bind(this), 100)
    }
    flashPieceOff() {
        let flashMatrix = this.state.matrix;
        flashMatrix[0][this.state.cPosition[1]] = 0
        this.setState({
            matrix: flashMatrix,
            initial: this.state.initial++
        })
    }


    //Game mechanics

    checkVictory() {
        let matrix = this.state.matrix;
        let countPiecesInRow = 0;
        let countTopRowPieces = 0;
        //Check horizontal victory (Row Win)
        for (let rows = 0; rows < matrix.length; rows++) {
            for (let segment = 0; segment < matrix[rows].length; segment++) {
                if (matrix[rows][segment]!==0) {
                    let pieceType = matrix[rows][segment];
                    countPiecesInRow++;
                    
                    if (matrix[rows][segment+1] === pieceType&&matrix[rows][segment+2] === pieceType&&matrix[rows][segment+3] === pieceType) {
                        matrix[rows][segment] = 3
                        matrix[rows][segment+1] = 3
                        matrix[rows][segment+2] = 3
                        matrix[rows][segment+3] = 3

                        let winnerName = null
                        pieceType === 1? winnerName = 'Red Player' : winnerName = 'Blue Player';
                        redVictoryCount = this.state.redVictories
                        blueVictoryCount = this.state.blueVictories
                        winnerName === 'Red Player'? redVictoryCount++ : blueVictoryCount++;
                        this.setState({
                            matrix: matrix,
                            winner: winnerName,
                            victory: true,
                            redVictories: redVictoryCount,
                            blueVictories: blueVictoryCount
                        })

                    } else if (((matrix[rows+1]!==undefined&&matrix[rows+1][segment] === pieceType)&&(matrix[rows+2]!==undefined&&matrix[rows+2][segment] === pieceType)&&(matrix[rows+3]!==undefined&&matrix[rows+3][segment] === pieceType))) {
                        matrix[rows][segment] = 3
                        matrix[rows+1][segment] = 3
                        matrix[rows+2][segment] = 3
                        matrix[rows+3][segment] = 3

                        let winnerName = null
                        pieceType === 1? winnerName = 'Red Player' : winnerName = 'Blue Player';
                        redVictoryCount = this.state.redVictories
                        blueVictoryCount = this.state.blueVictories
                        winnerName === 'Red Player'? redVictoryCount++ : blueVictoryCount++;
                        this.setState({
                            matrix: matrix,
                            winner: winnerName,
                            victory: true,
                            redVictories: redVictoryCount,
                            blueVictories: blueVictoryCount
                        })
                    } else if (((matrix[rows+1]!==undefined&&matrix[rows+1][segment+1] === pieceType)&&(matrix[rows+2]!==undefined&&matrix[rows+2][segment+2] === pieceType)&&(matrix[rows+3]!==undefined&&matrix[rows+3][segment+3] === pieceType))) {
                        matrix[rows][segment] = 3
                        matrix[rows+1][segment+1] = 3
                        matrix[rows+2][segment+2] = 3
                        matrix[rows+3][segment+3] = 3

                        let winnerName = null
                        pieceType === 1? winnerName = 'Red Player' : winnerName = 'Blue Player';
                        redVictoryCount = this.state.redVictories
                        blueVictoryCount = this.state.blueVictories
                        winnerName === 'Red Player'? redVictoryCount++ : blueVictoryCount++;
                        this.setState({
                            matrix: matrix,
                            winner: winnerName,
                            victory: true,
                            redVictories: redVictoryCount,
                            blueVictories: blueVictoryCount
                        })
                    } else if (((matrix[rows+1]!==undefined&&matrix[rows+1][segment-1] === pieceType)&&(matrix[rows+2]!==undefined&&matrix[rows+2][segment-2] === pieceType)&&(matrix[rows+3]!==undefined&&matrix[rows+3][segment-3] === pieceType))) {
                        matrix[rows][segment] = 3
                        matrix[rows+1][segment-1] = 3
                        matrix[rows+2][segment-2] = 3
                        matrix[rows+3][segment-3] = 3
                        let winnerName = null
                        pieceType === 1? winnerName = 'Red Player' : winnerName = 'Blue Player';
                        redVictoryCount = this.state.redVictories
                        blueVictoryCount = this.state.blueVictories
                        winnerName === 'Red Player'? redVictoryCount++ : blueVictoryCount++;
                        this.setState({
                            matrix: matrix,
                            winner: winnerName,
                            victory: true,
                            redVictories: redVictoryCount,
                            blueVictories: blueVictoryCount
                        })
                    }
                }
                if (rows === 0&&matrix[rows][segment]!==0) {
                    countTopRowPieces++
                    if (countTopRowPieces === 7) {
                        this.setState({
                            tie: true,
                            matrix: window.catBoard
                        })
                    }
                }
            }
        }
    }

    getLowestAvailableInColumn(position) {
        for (let i = 0; i < this.state.matrix.length; i++) {
            if (this.state.matrix[i][position[1]]!==0) {
                return i-1;
                break;
            }
        }
    return 5;
    }

    placePiece(position) {
        let lowestSlot = this.getLowestAvailableInColumn(position)
//        this.trickleDownEffect(position, lowestSlot)
        let newMatrix = this.state.matrix;
        newMatrix[lowestSlot][position[1]] = this.state.currentTurn;

        //Changing turn
        window.turn === 1? window.turn = 2 : window.turn = 1;
        this.setState({
            matrix: newMatrix,
            currentTurn: window.turn
        })

        this.checkVictory()

        if (this.state.victory === false){
        axios.post('api/gameData', {
            "ID": 1,
            "board": JSON.stringify(this.state.matrix),
            "redVictories": this.state.redVictories,
            "blueVictories": this.state.blueVictories
        })
        } else {
            axios.post('api/gameData', {
                "ID": 1,
                "board": JSON.stringify(window.emptyBoard),
                "redVictories": this.state.redVictories,
                "blueVictories": this.state.blueVictories
            })
        }
    }

    turnOffWarning() {
        this.setState({
            warning: false
        })
    }

    toggleWarning() {
        if (!this.state.warning){
        this.setState({
            warning: !this.state.warning
        })
        setTimeout(this.turnOffWarning.bind(this), 1000)
        }
    }

    logSegmentPosition(position) {
        if (this.state.victory === false){
        this.state.matrix[position[0]][position[1]] !== 0? 
        this.toggleWarning() :
        this.placePiece(position);
        }
    }

    resetBoard() {
        if (this.state.victory === true||this.state.tie === true) {
        this.setState({
            matrix:[[0,0,0,0,0,0,0],  
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0] 
                        ],
            victory: false,
            tie: false
        })
        }
    }
//sample post
/*
axios.post('api/gameData', {
    "ID": 1,
    "board": JSON.stringify(this.state.board),
    "redVictories": this.state.redVictories,
    "blueVictories": this.state.blueVictories
})

*/


    componentDidMount() {
        axios.get('/api/gameData')
            .then((data) => {
                console.log(data.data);
                console.log(typeof data.data[0].redVictories)
                let uploadedBoard = JSON.parse(data.data[0].board)
                window.redVictoryCount = data.data[0].redVictories
                window.blueVictoryCount = data.data[0].blueVictories
                this.setState({
                    matrix: uploadedBoard,
                    redVictories: data.data[0].redVictories,
                    blueVictories: data.data[0].blueVictories
                })
            })
            .catch(err => console.log('error in CDM HOME'));
    }

    render() {
        return (
            <div>
                {/* Warning Message */}
                { this.state.warning? <div className='Warning'>Choose a different position loser</div> : null}
                <div id="board">
                {/* Render Board */}
                {
                    this.state.matrix.map( (row, index) => (
                            <Row currentTurn={this.state.currentTurn} row={row} index={index} logSegmentPosition={this.logSegmentPosition.bind(this)} matrix={this.state.matrix} key={Math.random(0,100)*Math.random(0,100)}/>
                    ))
                }
                </div>
                {/* Victory Message */}
                { this.state.victory? <div className='Victory'>Winner! {this.state.winner} has won!</div> : null}
                < Profile player={'Red'} victories={this.state.redVictories}/>
                < Profile player={'Blue'} victories={this.state.blueVictories}/>
                {(this.state.victory)? <div onClick={() => this.resetBoard()} className="newgame">NEW GAME?</div> : null }
                { this.state.tie? <div className='Tie'>Tie! It's a cat's game</div> : null}
                {(this.state.tie)? <div onClick={() => this.resetBoard()} className="tiegame">NEW GAME?</div> : null }
            </div>
        )
        }
    }