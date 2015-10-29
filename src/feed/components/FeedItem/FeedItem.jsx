import React from 'react';
import {RaisedButton, CardTitle, CardMedia, FontIcon, Card} from 'material-ui';


class FeedItem extends React.Component {

    getImgStyle() {
        return {
            backgroundImage: 'url(' + this.props.recipe.images[0] + ')'
        };
    }

    handleLike(recipeUrl) {
        this.props.handleLike(recipeUrl);
    }

    render() {
        return (
            <div className="feed-item">
                <Card>
                    <CardMedia overlay={
                        <CardTitle
                            title={this.props.recipe.title}
                            subtitle={this.props.recipe.site.displayName} />
                        }>
                        <div className="feed-item__img"
                             style={this.getImgStyle()}></div>
                    </CardMedia>
                </Card>
                <div className="feed-item__like" onClick={this.handleLike.bind(this, this.props.recipe.url)}>
                    <FontIcon className="material-icons">{this.props.like ? 'favorite' : 'favorite_border'}</FontIcon>
                </div>
            </div>
        );
    }

}

export default FeedItem;
