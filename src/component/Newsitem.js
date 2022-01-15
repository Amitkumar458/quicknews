import React, { Component } from 'react'

export class Newsitem extends Component {
    
    render() {
        let {title , description , imageurl , newsurl} = this.props;
        return (
            <div>
                <div className="card" id='newsitem'>
                    <img src={imageurl === null ? "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409" : imageurl} className="card-img-top" style={{maxHeight:"12rem"}} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:"red"}}>{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem;
