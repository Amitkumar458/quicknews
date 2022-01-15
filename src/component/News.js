import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country:"in",
        category:'general'
    }

    static Typo = {
        country:PropTypes.string,
        category:PropTypes.string
    }

    articles = [];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalarticles:1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45f26c2bd2344144b8196571f9717f8f&page=${this.state.page}&pageSize=12`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles,
            totalarticles: parsedata.totalResults,
            loading:false
        });
    }

    handelnextclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45f26c2bd2344144b8196571f9717f8f&page=${this.state.page + 1}&pageSize=12`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles,
            page: this.state.page + 1,
            loading:false
        });
        window.scroll({
            top: 80,
            left: 0,
            behavior: 'smooth'
        });
    };

    handelpreviousclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45f26c2bd2344144b8196571f9717f8f&page=${this.state.page - 1}&pageSize=12`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles,
            page: this.state.page - 1,
            loading:false
        });
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 style={{ color: "red" }}>Quick News - Top-Headlines - Country - {this.props.country} - {this.props.category} </h2>
                {this.state.loading && <Spinner/>}
                <div className="row my-">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4 my-1' key={element.url} >
                            <Newsitem title={element.title !== null ? element.title.length > 110 ? element.title.slice(0, 110) + "..." : element.title : " "} description={element.description !== null ? element.description.length > 180 ? element.description.slice(0, 180) + "..." : element.description : " "} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className='container'>
                    <div className="d-flex justify-content-between my-4">
                        <button type="button" disabled={this.state.page <= 1} onClick={this.handelpreviousclick} className="btn btn-light">&larr; Previous</button>
                        <button type="button" disabled={this.state.totalarticles/12 <= this.state.page} onClick={this.handelnextclick} className="btn btn-light">Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;

