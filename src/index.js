import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Router } from "@reach/router";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingWindow: true,
        }
        this.toggleWindowShowing = this.toggleWindowShowing.bind(this);
        this.openWindow = this.openWindow.bind(this);

    }
    toggleWindowShowing () {
        this.setState(prevState => ({
            showingWindow: !prevState.showingWindow
        }));
    }
    openWindow() {
        // opens window if it's not already showing
        if (this.state.showingWindow === false) {
            this.setState({ showingWindow: true });
        }
    }

    render() {
        const heart = '<3'
        return (
            <>
                <Sidebar openWindow={this.openWindow}/>
                <div className='window-container'>
                    <Router>
                        <About
                            path="/"
                            showing={this.state.showingWindow}
                            toggleWindowShowing={this.toggleWindowShowing}
                        />
                        <Projects
                            path="/projects"
                            showing={this.state.showingWindow}
                            toggleWindowShowing={this.toggleWindowShowing}
                        />
                    </Router>
                </div>
                <footer>
                    built with {heart} by Michael Long /
                    icons from <a href='https://icons8.com' target="__blank">Icons8</a>
                </footer>

            </>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
