import React, { Component } from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;