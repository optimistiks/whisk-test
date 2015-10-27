import React from 'react'
import FeedItem from '../FeedItem/FeedItem.jsx'


class FeedList extends React.Component {

    render() {
        return (<div>
            <FeedItem />
            <FeedItem />
            <FeedItem />
        </div>);
    }

}

export default FeedList
