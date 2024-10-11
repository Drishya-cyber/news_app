import React, { Component } from 'react';
import './NewsItem.css';

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-3">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
            <i className="fas fa-newspaper"></i> {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imageurl} alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                <i className="fas fa-user"></i> By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-lg btn-dark">
              <i className="fas fa-external-link-alt"></i> Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
