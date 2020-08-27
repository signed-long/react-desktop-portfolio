import React from 'react';
import Window from './Window'

class About extends React.Component {
    render() {
        return (
            <>
                <Window
                    contentClass = 'window-content'
                    className={'about-window ' + (this.props.showing ? '' : 'd-none')}
                    toggleWindowShowing={this.props.toggleWindowShowing}
                >
                    <h2>Whats up, I'm Michael!</h2>
                    <ul>
                        <li>
                            I'm a developer and student studying
                            computing science at the University of Alberta.
                            I’m interested in building software that improves
                            people’s lives, businesses, and art.
                        </li>

                    </ul>
                    <p>
                        Checkout my work at:
                        <a href='https://github.com/MichaelongII'>
                            <img className='small-icon' src='gh.png' alt='github icon'/>
                        </a>
                        <a href='https://www.linkedin.com/in/michael-long-5a1623160/'>
                            <img className='small-icon' src='li.png' alt='linkedin icon'/>
                        </a>
                    </p>
                </Window>
            </>
        )
    }
}


export default About
