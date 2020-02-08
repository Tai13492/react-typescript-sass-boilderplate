const sass = require("node-sass");
const aliasImporter = require("node-sass-alias-importer");

sass.render({
  importer: [
    aliasImporter({
      styles: "./src/styles"
    })
  ]
});
