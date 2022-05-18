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

        console.log(completePrompt)

        const configuration = new Configuration({
            apiKey: "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",
          });
          const openai = new OpenAIApi(configuration);
          
          openai.createCompletion("text-curie-001", {
            prompt: completePrompt,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
          .then((response) => {
              console.log(response.data.choices[0].text)
            const newPromptsList = [formDataObj.prompt, ...this.state.prompts]
            const newResponsesList = [response.data.choices[0].text, ...this.state.responses]
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