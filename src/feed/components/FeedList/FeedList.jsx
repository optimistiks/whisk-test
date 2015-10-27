import React from 'react'
import FeedItem from '../FeedItem/FeedItem.jsx'


class FeedList extends React.Component {

    render() {
        return (<div className="row">
            <div className="col-1-4"><FeedItem /></div>
            <div className="col-1-4"><FeedItem /></div>
            <div className="col-1-4"><FeedItem /></div>
            <div className="col-1-4"><FeedItem /></div>
        </div>);
    }

}

export default FeedList
