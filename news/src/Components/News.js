import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = []; // Use sample articles if needed

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2b7a9ec8a30d4abf90f5d66faa099cda&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePreviousClick = () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{ 
            fontFamily: 'Roboto, sans-serif', 
            fontWeight: 'bold', 
            margin: '35px 0',
            fontSize: '2.5rem' // You can adjust the font size as needed
          }}>
            Top-Headlines for Our News App
          </h1>

          {this.state.loading && <Spinner />}

          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4">
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ''}
                      description={element.description ? element.description.slice(0, 88) : ''}
                      imageurl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>

          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark btn-lg"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-dark btn-lg"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
