import { connect } from "react-redux";
import JokeComponent from "../components/JokeComponent";

const mapStateToProps = state => ({
  joke: state.app.joke,
  jokeLoading: state.app.jokeLoading,
  jokeError: state.app.jokeError
});

const JokeContainer = connect(mapStateToProps)(JokeComponent);

export default JokeContainer;
