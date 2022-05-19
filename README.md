# Front End Developer Intern Challenge - Fall 2022


## Fun with GPT-3

GPT-3 is a powerful AI model created by OpenAI. It can process plain text prompts and produce outputs that are hard to distinguish from human writing. Check out some examples of what it can do! GPT-3 can be accessed through a public API that includes a generous amount of free credits. 

### The Challenge

You will write an app that sends plain text prompts to the OpenAI API and displays the results in a list.

We'd like your app to have a simple-to-use interface that includes the following:
●	A form for entering text prompts
●	Submitting the form sends the prompt to the OpenAI API
●	Results are displayed in a list, sorted from newest to oldest. Each result should include the original prompt and a response from the API.


### Technical requirements

1.	Results should come from OpenAI’s completions API, for which you’ll need a free API key (no credit card required). Detailed signup instructions are included below.
○	We’ve provided screenshots below of demo apps we built using the OpenAI API. 
○	We recommend using the “text-curie-001” AI engine which is a good balance between speed, cost, and accuracy (example code below)
○	You are free to use any front end framework/component library you like (or none at all!)
2.	Each result should include at least the original prompt you entered and the response from the API.
3.	Responses should be stored in order of newest to oldest.
4.	The HTML that ends up being served client-side should be accessible and semantic (MDN reference)

Deployed app: https://fun-with-ai-app.herokuapp.com
