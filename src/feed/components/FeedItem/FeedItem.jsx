import React from 'react';
import {RaisedButton, CardTitle, CardMedia, FontIcon} from 'material-ui';
import Card from 'material-ui/lib/card/card';


class FeedItem extends React.Component {

    getImgStyle() {
        return {
            backgroundImage: 'url(' + this.props.recipe.images[0] + ')'
        };
    }

    render() {
        console.log('render recipe, like is', !!this.props.like);
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
                <div className="feed-item__like">
                    <FontIcon className="material-icons">{this.props.like ? 'favorite' : 'favorite_border'}</FontIcon>
                </div>
            </div>
        );
    }

}

export default FeedItem;
