import React from 'react';
import Button from 'react-bootstrap/Button';

import '../../App.scss';

export default class ButtonNextLevel extends React.Component {
    constructor(props) {
        super(props);        
      }

    render() {
        return(
            <>
                <Button className="next-btn" onClick={() => this.props.nextLevel()} disabled={this.props.buttonDisable}>Дальше</Button>
            </>
        )
    }
} 