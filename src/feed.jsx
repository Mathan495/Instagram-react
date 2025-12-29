import React from 'react'
import Stories from './stories';
import Posts from './posts';

function Feed() {
    return (
        <div>
            <div className='feed-wrap'>
                <div><Stories /></div> 
                <div><Posts /> </div>
            </div>
        </div>
    );
}
export default Feed