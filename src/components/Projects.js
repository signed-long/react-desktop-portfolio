import React from 'react';
import Window from './Window'

class Projects extends React.Component {
    constructor () {
        super();
        this.projects = [
            {   title: 'Istio End-User Authorization Demo',
                type: 'DevOps',
                techs: ['Kubernetes', 'Istio', "Helm", 'Github Actions', 'Flask'],
                desc: [
                    `A simple application where a user can GET private routes only after being authenticated and possessing a valid, signed JWT token.`,
                    `Deployed with helm to a local kubernetes cluster with support for automated database migrations.`,
                    `Made up of two Flask microservices with CI pipelines using GitHub actions and Github Container Registry.`,
                    `Istio Gateway and AuthorizationPolicy are used to move JWT verification and authorization logic out of application code.`
                ],
                date: '2022',
                link: {exists: true, git: true, url: 'https://github.com/signed-long/istio-auth-example'}
            },
            {   title: 'TapeFlip.app',
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
                date: 'Summer, 2020',
                link: {exists: true, git: true, url: 'https://github.com/signed-long/TapeFlip.app'}
            },
            {   title: 'Swift iPod App',
                type: 'iOS',
                techs: ['Swift', 'SwitUi', "CoreData"],
                desc: [
                    `iOS app that’s goal is to replicate the core features of
                    an iPod with the songs a user has stored in the Files App.`,
                    `I implemented a space and time efficient player object
                    to handle playing and skipping though songs, as well as
                    support for playlists, artists, and albums.`
                ],
                date: 'Spring, 2020',
                link: {exists: true, git: true, url: 'https://github.com/signed-long/Swift-iPod'}
            },
            {   title: 'Little Free Library App',
                type: 'Android',
                techs: ['Java', 'Android'],
                desc: [
                    `A book sharing app for Android built in a group as the term project
                    for my Intro to Software Engineering class.`,
                    `The features that I implemented were, scanning
                    a book’s barcode with the camera, getting a book’s information
                    from the Google Books API, and storing this information using Firebase.`
                ],
                date: 'Fall, 2020',
                link: {exists: true, git: true, url: 'https://github.com/CMPUT301F20T29/Bobs-Little-Free-Library'}
            },
            {   title: 'Portfolio Site',
                type: 'Android',
                techs: ['JavaScript', 'React', "CSS"],
                desc: [
                    `The website you're on right now! A simple desktop themed portfolio
                    site built using React.`,
                    `I find the best way for me to wrap my head around a new technology is
                    to build a small project with it - so I made this site as my introduction to React.`
                ],
                date: 'Summer, 2020',
                link: {exists: true, git: true, url: 'https://github.com/signed-long/react-desktop-portfolio'}
            },

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
                    <h2>> projects</h2>
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
