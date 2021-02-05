import React from "react";
import {Nav} from "react-bootstrap";
import { Link } from "@reach/router";

const Sidebar = (props) => (
    <>
        <Nav className="sidebar">
            <Nav.Item className='noselect desktop_icon'>
                <Icon
                    openWindow={props.openWindow}
                    imgSrc='/icons8-txt-50.png'
                    atlTxt='about icon'
                    to='/'
                    txt='about'
                />
            </Nav.Item>
            <Nav.Item className='noselect desktop_icon'>
                <Icon
                    openWindow={props.openWindow}
                    imgSrc='/icons8-folder-48.png'
                    atlTxt='projects icon'
                    to='projects'
                    txt='projects'
                />
            </Nav.Item>
        </Nav>
    </>
)
const Icon = (props) => (
    <>
        <Link onClick={props.openWindow} to={props.to} >
            <img className={props.imgSrc} src={props.imgSrc} alt={props.atlTxt} />
            <br />
            {props.txt}
        </Link>
    </>
)


export default Sidebar
