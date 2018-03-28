# SBG - Trading Tribe
## Technical Test Assessment

This test comes with a mock API server that represents a snapshot of our internal Sky Bet Trading Engine.

The challenge is to build an automation framework that explores and tests the endpoints provided.

Further information regarding each endpoint can be [found here](./apiDocs.html)

### The Test

We realise that everyone has different levels of skills and experience when it comes to development, and so if you do not have the time or knowledge to complete all tasks, that's ok, we just want to see how you would approach the problem and get a feel for how you code.

### Languages
This is a test automation focused test, so the end deliverable should be a test framework with various assertions against the provided endpoints. How you get there is up to you, though it's worth noting that we typically support Node.js and Kotlin.

### Review Criteria
At a high level we will be looking for:

* Clear instructions for how to set up and run the framework on a reviewer's machine
* Good understanding of the tasks undertaken
* Well structured and refactored code
* Use of relevant design patterns
* Good understanding of errors and how to handle them

#### Task One

Using the provided API:

1. Using the `/fixtures` endpoint, retrieve all fixtures.
1.1. Assert that there are 4 fixtures within the returned object.
2. Using the `/fixture` endpoint, store a new fixture.
2.1. Using the /fixture/{id}` endpoint, retrieve the new fixture.
3. To simulate latency within systems, there is an intentional, random delay to store a new fixture on the server. 
3.1. 

## Installation
### Pre-requisites
* LTS version of Node
* NPM

### Usage
Start the mock API server:
`npm install && npm run start`

