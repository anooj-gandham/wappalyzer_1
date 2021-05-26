const input = require("./inputUrlGoldFile.json");
const output = require("./resultsGoldFile.json");
const axios = require("axios");

async function check_result() {
  axios
    .post("http://localhost:5000/api/simple-wapp", input)
    .then((res) => {
      console.log(`statusCode: ${res.statusCode}`);
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

check_result();
