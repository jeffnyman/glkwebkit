const { GlkJS } = require("../app/glkapi.cjs.js");

const glkJs = new GlkJS();

glkJs.init();
console.log(glkJs.name);
console.log(glkJs.version);
