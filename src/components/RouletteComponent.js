import React, { Component } from "react";
import PropTypes from "prop-types";

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

class Categories extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      categories: this.props.categories
    };
  }

  handleClick(category) {
    this.props.getJokeByCategory(category);
  }

  render() {
    const categories = (categories, fragment = []) => {
      categories.forEach(category =>
        fragment.push(
          <button
            className="joke-category"
            key={category}
            onClick={() => this.handleClick(category)}
          >
            {capitalize(category)}
          </button>
        )
      );
      return fragment;
    };

    return (
      <div className="categories">{categories(this.props.categories)}</div>
    );
  }
}

class RouletteComponent extends Component {
  constructor(props) {
    super(props);

    const { categories, categoriesLoading, categoriesError } = this.props;

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      categories: categories ? categories : [],
      error: categoriesError,
      loading: categoriesLoading
    };
  }

  handleClick() {
    this.props.getRandomJoke();
  }

  componentDidMount() {
    this.props.getCategories();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        categories: nextProps.categories ? nextProps.categories : [],
        error: nextProps.categoriesError,
        loading: nextProps.categoriesLoading
      });
    }
  }

  render() {
    const { loading, error } = this.state;
    const showCategories = () => {
      if (error) {
        return (
          <p className="error">
            Something went wrong. Try refreshing the page.
          </p>
        );
      } else {
        return (
          <Categories
            categories={this.state.categories}
            getJokeByCategory={this.props.getJokeByCategory}
          />
        );
      }
    };

    return (
      <div className="roulette">
        <button className="roulette-button" onClick={this.handleClick}>
          HIT ME!
        </button>
        <p className="instructions">
          Click on “Hit me!” to get a random Chuck Norris joke, or pick one of
          the categories below.
        </p>
        {loading ? <p>Loading...</p> : showCategories()}
      </div>
    );
  }
}

RouletteComponent.propTypes = {
  categories: PropTypes.array,
  categoriesError: PropTypes.object,
  categoriesLoading: PropTypes.bool,
  getCategories: PropTypes.func,
  getJokeByCategory: PropTypes.func,
  getRandomJoke: PropTypes.func
};

export default RouletteComponent;
