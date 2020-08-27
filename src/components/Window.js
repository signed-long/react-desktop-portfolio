import React from 'react';

class Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }
    move = (x, y) => this.setState({x, y});
    render() {
        const {x, y} = this.state;
        return (
            <>
                <Draggable x={x} y={y} onMove={this.move}>
                    <div className={"window " + this.props.className}>
                        <div id='window-header' className="window-header">
                            <span>
                                <button id='esc-btn' className="esc-btn text-center" onClick={this.props.toggleWindowShowing}>
                                    X
                                </button>
                            </span>
                        </div>
                    	<div className={this.props.contentClass}>
                    		{this.props.children}
                    	</div>
                    </div>
                </Draggable>
            </>
        )
    }
}

const throttle = (f) => {
    let token = null, lastArgs = null;
    const invoke = () => {
        f(...lastArgs);
        token = null;
    };
    const result = (...args) => {
        lastArgs = args;
        if (!token) {
            token = requestAnimationFrame(invoke);
        }
    };
    result.cancel = () => token && cancelAnimationFrame(token);
    return result;
};

class Draggable extends React.PureComponent {
    // component from SO answer https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable
    // by user polkovnikov.ph
    _relX = 0;
    _relY = 0;
    _ref = React.createRef();


    _onMouseDown = (event) => {
        // only want to be able to drag window by the 'window-header'
        var header = document.getElementById("window-header");
        var x_button = document.getElementById("esc-btn");
        if ((header.parentNode.querySelector(":hover") !== header) ||
            (x_button.parentNode.querySelector(":hover") === x_button)) {
            return
        }
        if (event.button !== 0){
            return;
        }
        const {scrollLeft, scrollTop, clientLeft, clientTop} = document.body;
        // Try to avoid calling `getBoundingClientRect` if you know the size
        // of the moving element from the beginning. It forces reflow and is
        // the laggiest part of the code right now. Luckily it's called only
        // once per click.
        const {left, top} = this._ref.current.getBoundingClientRect();
        this._relX = event.pageX - (left + scrollLeft - clientLeft);
        this._relY = event.pageY - (top + scrollTop - clientTop);
        document.addEventListener('mousemove', this._onMouseMove);
        document.addEventListener('mouseup', this._onMouseUp);
        event.preventDefault();
    };

    _onMouseUp = (event) => {
        document.removeEventListener('mousemove', this._onMouseMove);
        document.removeEventListener('mouseup', this._onMouseUp);
        event.preventDefault();
    };

    _onMouseMove = (event) => {
        this.props.onMove(
            event.pageX - this._relX,
            event.pageY - this._relY,
        );
        event.preventDefault();
    };

    _update = throttle(() => {
        const {x, y} = this.props;
        this._ref.current.style.transform = `translate(${x}px, ${y}px)`;
    });

    componentDidMount() {
        this._ref.current.addEventListener('mousedown', this._onMouseDown);
        this._update();
    }

    componentDidUpdate() {
        this._update();
    }

    componentWillUnmount() {
        this._ref.current.removeEventListener('mousedown', this._onMouseDown);
        this._update.cancel();
    }

    render() {
        return (
            <div className="draggable" ref={this._ref}>
                {this.props.children}
            </div>
        );
    }
}

export default Window
