import React from "react";

class Terminal extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      terminalPosition: { x: 400, y: 150 },
      pointerOffset: { x: null, y: null },
      dragging: false,
    };
  }
 
  componentDidUpdate (state, props) {
    if (this.state.dragging && !state.dragging) {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    } else if (!this.state.dragging && state.dragging) {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }
  }

  onMouseDown = (e) => {
    // only left mouse button
    if (e.button !== 0) return

    console.log(e.pageX);
    console.log(e.pageX - this.state.terminalPosition.x);

    this.setState({ 
      dragging: true,
      pointerOffset: {
        x: e.pageX - this.state.terminalPosition.x,
        y: e.pageY - this.state.terminalPosition.y
      }
    });

    e.stopPropagation();
    e.preventDefault();
  }

  onMouseUp = (e) => {
    this.setState({ dragging: false });
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseMove = (e) => {
    if (!this.state.dragging) return
    this.setState({
      terminalPosition: {
        x: e.pageX - this.state.pointerOffset.x,
        y: e.pageY - this.state.pointerOffset.y
      }
    });
    e.stopPropagation();
    e.preventDefault();
  }

  hideTerminal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.hideTerminal();
  }
  
  render() {
    return (
      <div 
        id='terminal'
        className='noselect'
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        style={{ 
          position: 'absolute', 
          left: this.state.terminalPosition.x,
          top: this.state.terminalPosition.y,
          color: '#fff',
        }}
      >
        <div id='terminal-header'>
          <div onClick={this.hideTerminal}><span>x</span></div>
          <div></div>
        </div>
        <ul id='terminal-body'>
         <li><span style={{ color: '#fd2d52' }}>lucas@website</span>:$</li>
         <li><span>Help</span></li>
          { 
            [...Array(17)].map((_, index) => <li key={index}></li>)
          }
        </ul>
      </div>
    )
  }
}

export default Terminal;
