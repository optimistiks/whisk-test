import React from 'react';
import FeedItem from '../FeedItem/FeedItem.jsx';
import {CircularProgress} from 'material-ui';


class FeedList extends React.Component {

    render() {

        const recipes = this.props.recipes.map((recipe, index) =>
            (<div key={index} className="col-1-4"><FeedItem recipe={recipe}/></div>)
        );

        return (<div className="row">
            {recipes.length ? recipes : <CircularProgress mode="indeterminate"/>}
        </div>);
    }

}

export default FeedList;
