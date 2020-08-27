import React from 'react';
import Window from './Window'

class Contact extends React.Component {
    render() {
        return (
            <Window
                contentClass = 'game-canvas '
                className={'projects-window' + (this.props.showing ? '' : ' d-none')}
                toggleWindowShowing={this.props.toggleWindowShowing}
            >

            </Window>
        )
    }
}


export default Contact
