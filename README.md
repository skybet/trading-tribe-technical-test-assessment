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

#### Tasks

Using the provided API:

1. Retrieve all fixtures.
    1. Assert that there are 3 fixtures within the returned object.
    2. Assert that each of the 3 fixtures has a fixtureId value.
2. Using the model guide in `apiDocs.html`, store a new fixture in the database.
    1. Get the new fixture.
    2. Assert, within the `teams` array, that the first object has a `teamId` of 'HOME'.
3. Delete the new fixture
    1. Assert that the new fixture no longer exists
4. To simulate latency within systems, there is an intentional, random delay to store a new fixture on the server. 
    1. Bearing the delay in mind, retrieve a new fixture as soon as it's available
 

## Installation
### Pre-requisites
* LTS version of Node
* NPM

### Usage
Start the mock API server:
`npm install && npm run start`

