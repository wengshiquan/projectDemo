// vue.config.js
const test = require("./data/test.json");
module.exports = {
  publicPath: "./",
  devServer: {
    before(app) {
      http://localhost:8080/test
       app.get("/test", (req, res) => {
        res.json(test);
      });
    }
  }
};
