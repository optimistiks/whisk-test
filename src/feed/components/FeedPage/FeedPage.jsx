import '../../styles/index.css';
import React from 'react';
import Parse from '../../../common/modules/parse-client/index';
import { connect } from 'react-redux';
import FeedSearch from '../FeedSearch/FeedSearch.jsx';
import FeedTabs from '../FeedTabs/FeedTabs.jsx';
import FeedList from '../FeedList/FeedList.jsx';
import actionCreators from '../../modules/action-creators/index';


class FeedPage extends React.Component {

    componentWillMount() {
        this.props.dispatch(actionCreators.loadRecipes(this.props.params.category));
        this.props.dispatch(actionCreators.loadLikes());
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.category !== this.props.params.category) {
            this.props.dispatch(actionCreators.loadRecipes(nextProps.params.category))
        }
    }

    handleLike(recipeUrl) {
        if (this.props.likes[recipeUrl]) {
            this.props.dispatch(actionCreators.dislike(this.props.likes[recipeUrl]));
        } else {
            this.props.dispatch(actionCreators.like(recipeUrl));
        }
    }

    handleSearch(event) {
        this.props.dispatch(actionCreators.search(event.target.value));
    }

    render() {

        const recipes = this.props.recipes.filter(recipe => {
            return recipe.title.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1;
        });

        return (
            <div>
                <FeedSearch searchText={this.props.searchText} handleSearch={this.handleSearch.bind(this)}/>
                <FeedTabs category={this.props.params.category}/>
                <FeedList recipes={recipes} likes={this.props.likes}
                          handleLike={this.handleLike.bind(this)}/>
            </div>
        );
    }

}

export default connect(state => state)(FeedPage);
