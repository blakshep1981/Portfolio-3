import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCatagories() {
        if (this.state.activeTab === 0) {
            return (

                <div className="projects-grid">
               <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'afff', height: '170 px' }} >Travoogle</CardTitle>
                    <CardActions border>
                        <a href="https://github.com/wazshaiwayana/project1" target="_blank">GitHub</a>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'afff', height: '170 px' }} >Bill and Subscription Reminder</CardTitle>
                    <CardActions border>
                        <a href="https://github.com/blakshep1981/Bill-and-Subscription-Reminder-Application" target="_blank">GitHub</a>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'afff', height: '170 px' }} >Reverse Engineering Authentication</CardTitle>
                    <CardActions border>
                        <a href=" https://docs.google.com/document/d/1m6Jvb1rCqcIj3mSy_LwNEtqeU-GSWYUaVz13x6FR9so/edit?usp=sharing" target="_blank">Goggle</a>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'afff', height: '170 px' }} >Progressive Budget</CardTitle>
                    <CardActions border>
                        <a href="https://glacial-plateau-68550.herokuapp.com/" target="_blank">Heroku</a>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'afff', height: '170 px' }} >Team Profile Generator</CardTitle>
                    <CardActions border>
                        <a href="https://github.com/blakshep1981/Homework-10" target="_blank">GitHub</a>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'afff', height: '170 px' }} >README Generator</CardTitle>
                    <CardActions border>
                        <a href="https://github.com/blakshep1981/Homework-9" target="_blank">GitHub</a>
                    </CardActions>
                </Card>
                </div>
            )

        }


    }
    render() {
        return (
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Projects</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCatagories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;