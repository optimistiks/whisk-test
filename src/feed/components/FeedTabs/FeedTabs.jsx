import React from 'react';
import {Tabs, Tab} from 'material-ui';
import {History} from 'react-router';


const FeedTabs = React.createClass({

        mixins: [History],

        handleTabChange(value) {
            this.history.pushState(null, `/recipes/${value}`);
        },

        render() {

            return <div>
                <Tabs valueLink={{value: this.props.category, requestChange: this.handleTabChange}}>
                    <Tab
                        label="Just for you"
                        value="personal"
                    />
                    <Tab
                        label="Seasonal"
                        value="seasonal"
                    />
                    <Tab
                        label="Popular now"
                        value="popular"
                    />
                    <Tab
                        label="Quick and easy"
                        value="quick"
                    />
                </Tabs>
            </div>;
        }

    }
);
export default FeedTabs;
