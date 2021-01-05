import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

export class CardContent extends Component {
    state= {
        loading: true
    }

    async componentDidMount() {
        const { id, title, body } = this.props.location.state;
        this.setState({id, title, body});
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        const newData = data.filter((value) => {
            return value.postId === id;
        });
        this.setState({commentData: newData, loading: false});
    }

    render() {
        return (
            <>
                {this.state.loading && <Loader />}
                <div className='go_back'>
                    <Link to='/'>go back</Link>
                </div>
                <div className="container">
                    <h2 className='blog_heading'>{this.state.title}</h2>
                    <p className='blog_content'>{this.state.body}</p>
                    <span className='comments_heading'>comments:</span>
                    <ul className='comments'>
                    {
                        this.state.commentData !== undefined ?
                        this.state.commentData.map((value, index) => {
                            return (
                                <li key={index}>
                                    <h4>{value.name}:</h4>
                                    <p>{value.body}</p>
                                </li>)
                        })
                        : null
                    }
                    </ul>
                </div>
            </>
            
        )
    }
}

export default CardContent
