const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "./public")));

app.listen(port, () => {
	console.log(`Server listening on port 3000`);
});

app.get("/", (req, res) => {
	response.sendStatus(200);
});
