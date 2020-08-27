import React from 'react';
import { Link } from "@reach/router";


class GameWindow extends React.Component {
    render() {
        return (
            <>
                <div className={"game-window " + this.props.className}>
                    <div id='window-header' className="window-header">
                        <span>
                            <Link
                                to="GameSelector"
                            >
                                <button id='esc-btn' className="esc-btn text-center" onClick={this.props.toggleWindowShowing}>
                                    X
                                </button>
                            </Link>
                        </span>
                    </div>

                        {this.props.children}

                </div>
            </>
        )
    }
}



export default GameWindow
