import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <img
                            src="https://imgur.com/XZ3cc9J.jpg"
                            alt="Smiley face"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>About Me</h1>

                            <hr />

                            <p>Hello. My Name is Ryan Simpkins. I am currently 38 years old and am originally from
                            Jacksonville, Florida. I have a degree in Business Administration from the University of Central
                            Florida. My favorite sports teams include The UCF Knights, The Jacksonville Jaguars, The Orlando
                            Magic,and The San Diego Padres. I enjoy bike riding, hiking, reading, working out, watching tv and
                            movies. I'm looking to be a great coder and hope to develop an application that will make the world a better place.</p>

                            <h2 class="h1-responsive font-weight-bold my-4 navStyle">Personal Information</h2>
                            <h5>Phone Number: <a href="tel:9048911247">(904)891-1247</a></h5>
                            <h5>Email Address: <a href="rythsimpkins@yahoo.com">rythsimpkins@yahoo.com</a></h5>
                            <h5>Linked In: <a href="http://linkedin.com/in/ryan-simpkins-5505b010b" target="_blank">http://linkedin.com/in/ryan-simpkins-5505b010b</a></h5>
                            <h5>GitHub: <a href="https://github.com/blakshep1981" target="_blank">https://github.com/blakshep1981</a></h5>
                            <h5>Resume: <a
                                href="https://docs.google.com/document/d/1ZkI6V5PAf_qGrwKXKMAIIDHFH21BpPjvGNchrcuMHNw/edit?usp=sharing" target="_blank">https://docs.google.com/document/d/1ZkI6V5PAf_qGrwKXKMAIIDHFH21BpPjvGNchrcuMHNw/edit?usp=sharing</a>
                            </h5>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;