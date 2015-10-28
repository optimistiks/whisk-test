import '../../styles/index.css';
import React from 'react'
import FeedSearch from '../../components/FeedSearch/FeedSearch.jsx'
import FeedTabs from '../../components/FeedTabs/FeedTabs.jsx'
import FeedList from '../../components/FeedList/FeedList.jsx'

class FeedPage extends React.Component {

    componentWillMount() {
        console.log('FeedPage componentWillMount', this.props.params);
    }

    componentWillReceiveProps (nextProps) {
        console.log('FeedPage componentWillReceiveProps', nextProps.params);
    }

    render() {
        console.log('FeedPage render');
        return (
            <div>
                <FeedSearch />
                <FeedTabs category={this.props.params.category}/>
                <FeedList />
            </div>
        );
    }

}

export default FeedPage
