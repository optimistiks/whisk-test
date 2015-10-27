import React from 'react'
import FeedSearch from '../../components/FeedSearch/FeedSearch.jsx'
import FeedTabs from '../../components/FeedTabs/FeedTabs.jsx'
import FeedList from '../../components/FeedList/FeedList.jsx'

class FeedPage extends React.Component {

    render() {
        return (
            <div>
                <FeedSearch />
                <FeedTabs />
                <FeedList />
            </div>
        );
    }

}

export default FeedPage
