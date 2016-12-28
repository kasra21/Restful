# Restful
This web App including backend and front end that reserves the user's input letters case 

README

### How do I get set up?

IMPORTANT: try to only use eclipse to clone, launch and deploy as no other method has been attempted so far
The project has only be set with help of eclipse so far:

* **Clone The project**: 

[![clone](https://github.com/kasra21/Restful/raw/master/screenshots/clone.png)](#features)

* **Deploy on a Server**: it must be ready to be deployed and "run on a server"

[![deploy](https://github.com/kasra21/Restful/raw/master/screenshots/deploy.png)](#features)
[![deploy2](https://github.com/kasra21/Restful/raw/master/screenshots/deploy2.png)](#features)

* **Access on browser**: The project must be accessible on any browser's localhost:xxxx where xxxx is the port the server is running on (8080 by default). The form may be access on:
	`http://localhost:8080/Restful/Form.html`

Can also access `http://localhost:8080/Restful/rest/json/letters/get` to verify that the restful api's are running

You may also use postman or an equivalent method to call the rest api's such as:
	`http://localhost:8080/Restful/rest/json/letters/reverseValidateLetters`
	{
		"value": "TeST"
	}

* **Unit Test**: The project contains some unit tests that can be used:

[![junit](https://github.com/kasra21/Restful/raw/master/screenshots/junit.png)](#features)

Don't forget to check the polymer UI directory (has its own README). If the polymer needs to communicate with the localhost:8080 make sure to modify the "Access-Control-Allow-Origin" of the server that the java code is running on
	

##### Requirements. 

* **Eclipse** may be downloaded from https://eclipse.org/downloads/packages/release/Mars/2
* **Maven** the builder for the dependencies and the project
* **Appache Tomcat/J2EE preview** A server you can deploy the app on


### Contribution guidelines
Never push on master, and please make a separated branch for pull request that we can see your modifications

### Who do I talk to?
* **Kasra Kazemi** e: kazemik4@unlv.nevada.edu.com | p: 775-813-9948