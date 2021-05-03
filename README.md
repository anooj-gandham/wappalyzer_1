# wapplayzer
API for wappalyzer

git clone https://github.com/anooj-gandham/wappalyzer_1.git
npm install (install the required dependencies)
node wapp.js or nodemon wapp.js (runs the backend server on the alotted port or 3000)

In POSTMAN, send a post request to 
http://localhost:3000/api/wapp/ 

with body of request as: 

{
  "url": "http://amazon.com"
}

The response will be JSON object of technologies used to build the website and related metadata.
