import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardMedia from 'material-ui/lib/card/card-media'


class FeedItem extends React.Component {

    render() {
        return (
            <div className="feed-item">
                <Card>
                    <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
                        <img src="http://lorempixel.com/600/337/nature/"/>
                    </CardMedia>
                </Card>
            </div>
        );
    }

}

export default FeedItem
