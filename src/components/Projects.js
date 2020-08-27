import React from 'react';
import Window from './Window'

class Projects extends React.Component {
    constructor () {
        super();
        this.projects = [
            {   title: 'tapeflip.app',
                type: 'web',
                techs: ['Python', 'Flask', "Bootstrap", 'Twillio'],
                desc: [
                    `Full-stack web application for music producers to upload their
                    sounds to be recorded on old tape machines.
                    Giving their music an authentic vintage sound.`,
                    `Features include user login, uploading and downloading files,
                    notifications via email and SMS powered by Twillio’s Api/SDK,
                    and collecting payments using the PayPal Api/SDK.`
                ],
                date: 'July, 2020',
                link: {exists: true, git: false, url: 'https://www.tapeflip.app'}
            },
            {   title: 'Mixtape App',
                type: 'iOS',
                techs: ['Swift', 'SwitUi', "CoreData"],
                desc: [
                    `iOS app that provides a user interface for creating playlists from,
                    listening to, and skipping through songs that the user has stored
                    in the Files app.`
                ],
                date: 'April, 2020',
                link: {exists: true, git: true, url: 'https://github.com/MichaelongII/SwiftUI-Mixtape-Player'}
            },
            {   title: 'Portfolio Website',
                type: 'iOS',
                techs: ['JavaScipt', 'React'],
                desc: [
                    `The site you’re on right now! A simple portfolio site to display some of
                    my projects and experience.`,
                    `This project served as an introduction to JS and React. I learned
                    a lot while making it, specifially about React concepts like JSX,
                    class-based vs. functional components, and state.`
                ],
                date: 'August, 2020',
                link: {exists: true, git: true, url: 'https://github.com/MichaelongII/react-desktop-portfolio'}
            }
        ]
    }
    render() {
        return (
            <>
                <Window
                    contentClass = 'window-content h-65'
                    className={'projects-window' + (this.props.showing ? '' : ' d-none')}
                    toggleWindowShowing={this.props.toggleWindowShowing}
                >
                    <h2>Projects</h2>
                    {this.projects.map((project, i) =>
                        <Project
                            key={project.title}
                            title={project.title}
                            type={project.type}
                            techs={project.techs}
                            desc={project.desc}
                            date={project.date}
                            link={project.link}
                    />)}
                </Window>
            </>

        )
    }
}

class Project extends React.Component {
    constructor () {
        super();
        this.state = {
            projectExpanded: false
        }
        this.toggleDescShowing = this.toggleDescShowing.bind(this);
    }
    toggleDescShowing () {
        // only hide desciption if user clicks on the project content block
        // somewhere there isn't text
        if (this.state.projectExpanded === true) {
            if (document.querySelector(".project-desc:hover") === null) {
                this.setState({ projectExpanded: false });
            }
        } else {
            this.setState({ projectExpanded: true });
        }
    }
    render() {
        return (
            <>
                <div className='project-content' onClick={this.toggleDescShowing}>
                    <p className='expand-icon'>
                        {(this.state.projectExpanded ? '-' : '+')}
                    </p>
                    <p className='project-date'>{this.props.date}</p>
                    <h5 className='project-title'>
                        / {this.props.title}
                        <a className={(this.props.link.exists ? '' : 'd-none')} href={this.props.link.url} target="__blank">
                            <img className='small-icon' src={(this.props.link.git ? 'gh.png' : 'link.png')} alt='link to project' />
                        </a>
                    </h5>
                    {this.props.techs.map((tech, i) => <span key={tech} className='project-tech'> {tech} </span>)}
                    <p id='project-desc' >
                        {this.props.desc.map((desc, i) =>
                            <p  key={i}
                                className={
                                     'project-desc' + (this.state.projectExpanded ? '' : ' d-none')
                                }
                            >
                                {desc}
                            </p>)
                        }
                    </p>


                </div>
            </>
        )
    }
}

export default Projects
