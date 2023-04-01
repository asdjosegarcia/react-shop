import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
    return (
        <div className='not-found_container'>
            <h2 className='not-found_number'>404</h2>
            <h3 className='not-found_message'>Page not found</h3>
            <button className='not-found_button'>Go back!</button>
        </div>
    );
}

export default NotFound;