import { connect } from "react-redux";
import JokeComponent from "../components/JokeComponent";

const mapStateToProps = state => ({
  joke: state.app.joke,
  jokeLoading: state.app.jokeLoading,
  jokeError: state.app.jokeError
});

const mapDispatchToProps = dispatch => ({});

const JokeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JokeComponent);

export default JokeContainer;
