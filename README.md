# wapplayzer
API for wappalyzer
<br />
git clone https://github.com/anooj-gandham/wappalyzer_1.git<br />
npm install (install the required dependencies)<br />
node wapp.js or nodemon wapp.js (runs the backend server on the alotted port or 3000)<br />
<br />
In POSTMAN, send a post request to <br />
http://localhost:3000/api/wapp/ <br />
<br />
with body of request as: <br />

{
  "url": "http://youtube.com"
} 
<br />
The response will be JSON object of technologies used to build the website and related metadata.<br />
