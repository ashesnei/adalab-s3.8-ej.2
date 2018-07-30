import React from 'react';

class Sheep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.handleClick}>Cuenta</button>
                <div>
                    <h1>{this.state.count}</h1>
                </div>
            </div>
        );
    }
}


export default Sheep;