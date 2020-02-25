import React from 'react';

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        let { counter } = this.state
        counter++;
        this.setState({ counter })
    }
    render() {
        return (
        <div> <p>This is my Counter: {this.state.counter}</p>
                <button
        onClick={this.onClick}
      >
        Add 1
      </button>
            </div>
        )
    }

}

export default Counter