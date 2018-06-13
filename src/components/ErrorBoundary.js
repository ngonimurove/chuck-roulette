import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null
    };
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ error: error, errorInfo: info });
    // Log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.error) {
      // Render fallback UI
      return <h1>Sorry, looks like Chuck broke the internet.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
