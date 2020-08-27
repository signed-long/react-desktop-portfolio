import React from 'react';
import Window from './Window'
import { Link } from "@reach/router";

class GameSelector extends React.Component {
    render() {
        return (
            <>
                <Window
                    contentClass = 'window-content'
                    className={'about-window ' + (this.props.showing ? '' : 'd-none')}
                    toggleWindowShowing={this.props.toggleWindowShowing}
                >
                    <GameSelection
                        openWindow={this.props.openWindow}
                        imgSrc='/console.png'
                        atlTxt='projects icon'
                        to='brickBreaker'
                        txt='Brick Breaker'
                    />
                    <GameSelection
                        openWindow={this.props.openWindow}
                        imgSrc='/console.png'
                        atlTxt='projects icon'
                        to='/solitare'
                        txt='Solitare'
                    />
                </Window>
            </>
        )
    }
}

const GameSelection = (props) => (
    <>

        <Link
            onClick={props.openWindow}
            to={props.to}
        >
            <div className="game-selection">
                <img className={props.imgSrc} src={props.imgSrc} alt={props.atlTxt} />
                <br />
                {props.txt}
            </div>
        </Link>

    </>
)


export default GameSelector
