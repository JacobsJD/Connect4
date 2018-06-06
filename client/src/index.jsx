import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                < Board/>
            </div>
        )
    }
}

ReactDOM.render(< App/>, document.getElementById('root'));