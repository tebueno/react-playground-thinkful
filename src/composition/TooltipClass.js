import React from 'react';
import './Tooltip.css';

class TooltipClass extends React.Component {
    static defaultProps = {
        color: '#01A800', // green
    };

    render() {
        console.log('Using a class component!')
        console.log(this.props)
        return (
          <span className='Tooltip'>
            <span
              style={{ color: this.props.color }}
            >
              {this.props.children}
            </span>
            <div className='Tooltip-message'>
              {this.props.message}
            </div>
          </span>
        )
    }
}

export default TooltipClass;