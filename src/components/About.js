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
                    <h2>> whoami</h2>
                    <ul>
                        <li>
                            I'm a student studying
                            computing science at the University of Alberta.
                            I'm interested in all parts of the SDLC from development, 
                            CI/CD, security, operations, and even more interested in when these things intersect.
                            I've completed a 12-month DevOps Engineering Internship at SAP, and am looking for another 
                            internship opportunity for Spring 2023.
                        </li>

                    </ul>
                    <p>
                        Check out my work at:
                        <a href='https://github.com/signed-long' target="_blank">
                            <img className='small-icon' src='gh.png' alt='github icon'/>
                        </a>
                        <a href='https://www.linkedin.com/in/michael-long-5a1623160/' target="_blank">
                            <img className='small-icon' src='li.png' alt='linkedin icon'/>
                        </a>
                    </p>
                </Window>
            </>
        )
    }
}


export default About
