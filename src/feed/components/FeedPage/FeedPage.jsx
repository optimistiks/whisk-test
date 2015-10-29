import '../../styles/index.css';
import React from 'react';
import Parse from '../../../common/modules/parse-client/index';
import ParseReact from 'parse-react';
import { connect } from 'react-redux';
import FeedSearch from '../FeedSearch/FeedSearch.jsx';
import FeedTabs from '../FeedTabs/FeedTabs.jsx';
import FeedList from '../FeedList/FeedList.jsx';
import actionCreators from '../../modules/action-creators/index';

const ParseComponent = ParseReact.Component(React);


class FeedPage extends ParseComponent {

    componentWillMount() {
        this.props.dispatch(actionCreators.loadRecipes(this.props.params.category))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.category !== this.props.params.category) {
            this.props.dispatch(actionCreators.loadRecipes(nextProps.params.category))
        }
    }

    observe(props, state) {
        console.log('observe is called with', props, state);
        return {
            likes: new Parse.Query('Like')
        };
    }

    shouldComponentUpdate(nextProps, nextState, third) {
        console.log('shouldComponentUpdate', nextProps, nextState, third);
        return true;
    }

    render() {
        console.log('FeedPage render', this.props.params.category, this.props.recipes, this.data.likes);
        return (
            <div>
                <FeedSearch />
                <FeedTabs category={this.props.params.category}/>
                <FeedList recipes={this.props.recipes} likes={this.data.likes}/>
            </div>
        );
    }

}

export default connect(state => state)(FeedPage);
