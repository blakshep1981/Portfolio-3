import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent><i className="fa fa-phone-square" aria-hidden="true"/> (904) 891-1247 </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent><i className="fa fa-email" aria-hidden="true"/> rythsimpkins@yahoo.com </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Contact;