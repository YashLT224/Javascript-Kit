class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
     

 <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>
          Mouse is at ({x}, {y})
        </div>
      )}
    />
  );
}     