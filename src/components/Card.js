import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({id, title, body}) => {
    return (
        <>
            <Link to={{
                pathname: '/cardcontent',
                state: {
                    id,
                    title,
                    body
                }
                }} >
                <li>
                    <h2><span className="blog_title">title</span><span className="blog_title_name">{title}</span></h2>
                </li>
            </Link>
        </>
    )
}

export default Card
