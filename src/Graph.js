import React, { Component } from 'react';
import GraphBar from './GraphBar';

class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            xmasVotes: 0,
            halloVotes: 0,
            easterVotes: 0
        };
    }

    render() {
        return (
            <div className="Graph">
                <div className="bars">
                    <GraphBar holiday={"Christmas"} value={this.state.xmasVotes} />
                    <GraphBar holiday={"Halloween"} value={this.state.halloVotes} />
                    <GraphBar holiday={"Easter"} value={this.state.easterVotes} />
                </div>
                <div className="votingButtons">
                    {/* <h3>Vote!</h3> */}
                    <button onClick={this.handleXmasClick.bind(this)}>Vote for Christmas</button>
                    <button onClick={this.handleHalloClick.bind(this)}>Vote for Halloween</button>
                    <button onClick={this.handleEasterClick.bind(this)}>Vote for Easter</button>
                </div>
            </div>
        );
    }

    handleXmasClick() {
        this.setState(prevState => ({ xmasVotes: prevState.xmasVotes + 1 }));
    }

    handleHalloClick() {
        this.setState(prevState => ({ halloVotes: prevState.halloVotes + 1 }));
    }

    handleEasterClick() {
        this.setState(prevState => ({ easterVotes: prevState.easterVotes + 1 }));
    }
}


export default Graph;