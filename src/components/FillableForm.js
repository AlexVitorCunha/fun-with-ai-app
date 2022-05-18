import React, {Component} from "react";
import {Form, Button, FloatingLabel} from 'react-bootstrap'
import Results from "./Results";
import 'bootstrap/dist/css/bootstrap.css'
const {Configuration, OpenAIApi} = require("openai");

class FillableForm extends Component{
    constructor(){
        super()
        this.state = {
            prompts: [],
            responses: []
        }
    }

    onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.prompt)

        let completePrompt;
        if(formDataObj.category === '0'){
            completePrompt = formDataObj.prompt
        }
        else if(formDataObj.category === '1'){
           completePrompt = "Write a tuite about " + formDataObj.prompt
        }
        else if(formDataObj.category === '2'){
            completePrompt = "A product lanch statement for " + formDataObj.prompt
        }
        else if(formDataObj.category === '3'){
            completePrompt = "Write a cover letter for " + formDataObj.prompt
        }
        else{
            completePrompt = "Write a poem about " + formDataObj.prompt 
        }

        const data = {
            prompt: completePrompt,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
           };
           
           var obj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
            body: JSON.stringify(data),
           }
           console.log(obj)
           fetch("https://api.openai.com/v1/engines/text-curie-001/completions", obj)
           .then((response) => {
               return response.json();

            }).then((data1) => {
                const newPromptsList = [formDataObj.prompt, ...this.state.prompts]
                const newResponsesList = [data1.choices[0].text, ...this.state.responses]
                this.setState({
                prompts : newPromptsList,
                responses : newResponsesList
                })
            });
    }
    render(){
        return(
            <div>
                <section>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter prompt</Form.Label>
                            <FloatingLabel controlId="prompt">
                                <Form.Control
                                as="textarea"
                                name="prompt"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Choose category</Form.Label>
                            <FloatingLabel controlId="category" label="Select a category">
                                <Form.Select name="category" aria-label="Select a category">
                                    <option value="0">No category</option>
                                    <option value="1">Twitter</option>
                                    <option value="2">Product Launch</option>
                                    <option value="3">Cover Letter</option>
                                    <option value="4">Poem</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" size="lg" type="submit">
                            Submit
                        </Button>
                    </Form>
                </section>
            <section>
                <h2>Responses</h2>
                <Results
                   prompts={this.state.prompts}
                   responses={this.state.responses} 
                />
            </section>
            </div>
            
        )
    }
} 

export default FillableForm