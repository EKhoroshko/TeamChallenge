import { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enum/app-route';
import css from './RenderErrorBoundary.module.css';

class RenderErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className={css.section}>
          <div className={css.container}>
            <h2>Something went wrong.</h2>
            <p>
              Please reload the page or return to the
              <Link
                to={AppRoute.ROOT}
                onClick={this.resetError}
                className={css.link}
              >
                home page.
              </Link>
            </p>
          </div>
        </section>
      );
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default RenderErrorBoundary;
