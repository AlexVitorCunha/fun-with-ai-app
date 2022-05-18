import React, {Component} from "react";
import {Card, ListGroup} from 'react-bootstrap'

class Results extends Component{
    render(){
        return( 
            <ListGroup>
                {this.props.prompts.map((prompt,index) => (
                    <ListGroup.Item>
                        <Card>
                            <Card.Header as="h5">Prompt #{index+1}</Card.Header>
                            <Card.Body>
                            <Card.Title>Prompt : {prompt} </Card.Title>
                            <Card.Text>
                                    Response: {this.props.responses[index]}
                            </Card.Text>
                            </Card.Body>
                        </Card> 
                   </ListGroup.Item> 
                ))
                }
            </ListGroup>
        )
    }

}

export default Results