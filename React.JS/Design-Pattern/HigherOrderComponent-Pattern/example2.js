function withLogger(WrappedComponent) {
    return class extends React.Component {
      componentDidMount() {
        console.log(`Component ${WrappedComponent.name} mounted`);
      }
  
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  }
  
  class MyComponent extends React.Component {
    render() {
      return <div>Hello, World!</div>;
    }
  }
  
  const EnhancedComponent = withLogger(MyComponent);        