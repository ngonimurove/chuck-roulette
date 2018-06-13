import { connect } from "react-redux";
import RouletteComponent from "../components/RouletteComponent";
import {
  getCategories,
  getJokeByCategory,
  getRandomJoke
} from "../actions/appActions";

const mapStateToProps = state => ({
  categories: state.app.categories,
  categoriesError: state.app.categoriesError,
  categoriesLoading: state.app.categoriesLoading
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => {
    dispatch(getCategories());
  },
  getJokeByCategory: category => {
    dispatch(getJokeByCategory(category));
  },
  getRandomJoke: () => {
    dispatch(getRandomJoke());
  }
});

const RouletteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouletteComponent);

export default RouletteContainer;
