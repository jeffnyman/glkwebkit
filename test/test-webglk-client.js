const { WebGlk } = require("../app/webglk.cjs.js");

const webGlk = new WebGlk();

webGlk.init();
console.log(webGlk.name);
console.log(webGlk.version);
