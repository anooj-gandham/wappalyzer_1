const ufs = require("url-file-size");

ufs(
  "https://stackoverflow.com/questions/8762201/how-to-get-the-cursor-to-change-to-the-hand-when-hovering-a-button-tag"
)
  .then(console.log) // 1416
  .catch(console.error);
