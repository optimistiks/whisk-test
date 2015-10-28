import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

class FeedTabs extends React.Component {

    render() {
        return <div>
            <Tabs>
                <Tab
                    label="Just for you"
                    route="personal"
                    onActive={(tab) => {
                        console.log('personal now active, route = ', tab.props.route);
                    }}/>
                <Tab
                    label="Seasonal"
                    route="seasonal"
                    onActive={(tab) => {
                        console.log('seasonal now active, route = ', tab.props.route);
                    }}/>
                <Tab
                    label="Popular now"
                    route="popular"
                    onActive={(tab) => {
                        console.log('popular now active, route = ', tab.props.route);
                    }}/>
                <Tab
                    label="Quick and easy"
                    route="quick"
                    onActive={(tab) => {
                        console.log('quick and easy active, route = ', tab.props.route);
                    }}/>
            </Tabs>
        </div>;
    }

}

export default FeedTabs
