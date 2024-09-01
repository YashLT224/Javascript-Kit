class Input extends React.Component {
    constructor() {
      super();
      this.state = { input: "" };
  
      this.handleInput = this.handleInput.bind(this);
    }
  
    handleInput(e) {
      this.setState({ input: e.target.value });
    }
  
    render() {
      <input onChange={handleInput} value={this.state.input} />;
    }
  }