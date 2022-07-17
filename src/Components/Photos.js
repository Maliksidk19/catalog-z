import React, { Component } from "react";

export class Photos extends Component {
  constructor() {
    super();
    this.state = {
      hits: [],
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://pixabay.com/api/?key=28669981-c4f5a419623d955d0831f140b&q=house&image_type=photo&pretty=true&orientation=horizontal&per_page=${this.props.perPage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ hits: parsedData.hits, totalHits: parsedData.totalHits });
  }

  handlePreviousClick = async () => {
    let url = `https://pixabay.com/api/?key=28669981-c4f5a419623d955d0831f140b&q=house&image_type=photo&pretty=true&orientation=horizontal&per_page=${
      this.props.perPage
    }&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      hits: parsedData.hits,
    });
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalHits / this.props.perPage)
    ) {
    } else {
      let url = `https://pixabay.com/api/?key=28669981-c4f5a419623d955d0831f140b&q=house&image_type=photo&pretty=true&orientation=horizontal&per_page=${
        this.props.perPage
      }&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        hits: parsedData.hits,
      });
    }
  };
  render() {
    return (
      <>
        <section className="px-5 py-1 bg-light text-dark">
          <div className="conatiner-fluid d-flex align-items-center justify-content-between">
            <h2 className="text-info">Latest Photos</h2>
            <div>
              <button
                disabled={this.state.page <= 1}
                className="btn btn-dark text-light btn-sm mx-2"
                onClick={this.handlePreviousClick}
              >
                &larr; Prev
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalHits / this.props.perPage)
                }
                className="btn btn-dark text-light btn-sm mx-2"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </section>
        <div className="container-fluid py-3 px-2 px-md-5">
          <div className="row">
            {this.state.hits.map((e) => {
              return (
                <div className="col-12 col-md-4 col-lg-3" key={e.previewURL}>
                  <div className="card border-0">
                    <div className="card-img">
                      <img src={e.webformatURL} className="w-100" alt="Heros" />
                    </div>
                    <div className="card-text d-flex justify-content-between">
                      <p className="d-flex align-items-center">
                        {e.likes} <i className="bx bxs-like mx-1"></i>
                      </p>
                      <p className="text-secondary d-flex align-items-center">
                        <i className="bx bxs-show mx-1"></i> {e.collections}K
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <nav className="px-5 p-0">
          <ul className="pagination d-flex justify-content-between align-items-center">
            <li className="page-item">
              <button
                disabled={this.state.page <= 1}
                className="btn btn-dark text-light"
                onClick={this.handlePreviousClick}
              >
                &larr; Prev
              </button>
            </li>
            <li>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalHits / this.props.perPage)
                }
                className="btn btn-dark text-light"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Photos;
