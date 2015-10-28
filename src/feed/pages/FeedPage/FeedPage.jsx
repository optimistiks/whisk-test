import '../../styles/index.css';
import React from 'react';
import { connect } from 'react-redux';
import FeedSearch from '../../components/FeedSearch/FeedSearch.jsx';
import FeedTabs from '../../components/FeedTabs/FeedTabs.jsx';
import FeedList from '../../components/FeedList/FeedList.jsx';
import actionCreators from '../../modules/action-creators/index';


class FeedPage extends React.Component {

    componentWillMount() {
        console.log('FeedPage componentWillMount');
        this.props.dispatch(actionCreators.loadRecipes(this.props.params.category))
    }

    componentWillReceiveProps(nextProps) {
        console.log('FeedPage componentWillReceiveProps', nextProps);
        if (nextProps.params.category !== this.props.params.category) {
            this.props.dispatch(actionCreators.loadRecipes(nextProps.params.category))
        }
    }

    render() {
        console.log('FeedPage render');
        return (
            <div>
                <FeedSearch />
                <FeedTabs category={this.props.params.category}/>
                <FeedList recipes={this.props.recipes}/>
            </div>
        );
    }

}

export default connect(state => state)(FeedPage);
