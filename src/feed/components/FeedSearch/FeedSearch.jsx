import React from 'react';
import TextField from 'material-ui/lib/text-field';


class FeedSearch extends React.Component {

    render() {
        return <div className="feed-search">
            <div className="feed-search__input">
                <TextField hintText="Search for recipes"/>
            </div>
        </div>;
    }

}

export default FeedSearch;
