import React from 'react';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: props.player,
            victories: props.victories
        }
    }

    logVictories() {
        let PlayerName = this.state.player.toLowerCase() + 'VictoryCount'
        let newCount = window[PlayerName]
        this.setState({
            victories: newCount
        })
    }

    componentDidMount() {
        setInterval(this.logVictories.bind(this), 1000);
    }

    render() {
        return (
            <div className={"Profile"+this.state.player}>
                <h4><u>{this.state.player+' Player'}</u></h4>
                <div onClick={() => this.logVictories()}>{'Wins: '+this.state.victories}</div>

            </div>
        )
    }
}