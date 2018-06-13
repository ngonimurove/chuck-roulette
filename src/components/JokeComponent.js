import React, { Component } from "react";
import PropTypes from "prop-types";

const showJoke = (loading, joke, error) => {
  if (error) {
    return loading ? (
      <p>Loading...</p>
    ) : (
      <p className="error"> Something went wrong. Please try again.</p>
    );
  } else {
    return loading ? <p>Loading...</p> : <p>{joke}</p>;
  }
};

class JokeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: this.props.joke ? this.props.joke.value : "",
      error: this.props.jokeError,
      loading: this.props.jokeLoading
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        joke: nextProps.joke ? nextProps.joke.value : "",
        error: nextProps.jokeError,
        loading: nextProps.jokeLoading
      });
    }
  }

  render() {
    const { loading, joke, error } = this.state;

    return <div className="joke">{showJoke(loading, joke, error)}</div>;
  }
}

JokeComponent.propTypes = {
  joke: PropTypes.object,
  jokeLoading: PropTypes.bool,
  jokeError: PropTypes.object
};

export default JokeComponent;
