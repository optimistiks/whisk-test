import React from 'react';
import FeedItem from '../FeedItem/FeedItem.jsx';
import {CircularProgress} from 'material-ui';


class FeedList extends React.Component {

    render() {

        const recipes = this.props.recipes.map((recipe, index) =>
            (<div key={index} className="col-1-4">
                <FeedItem recipe={recipe} like={this.props.likes[recipe.url]} handleLike={this.props.handleLike}/>
            </div>)
        );

        return (<div className="row">
            {recipes}
        </div>);
    }

}

export default FeedList;
