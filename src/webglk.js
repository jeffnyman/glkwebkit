export class WebGlk {
  constructor() {
    this.name = "WebGlk";
    this.version = "0.1.0";
  }

  init(appInterface) {
    console.log("WebGlk initializing ...");

    if (!appInterface && window.App) {
      appInterface = window.App;
    }

    if (!appInterface) {
      this.error("No app interface was provided.");
      return;
    }
  }

  error(message) {
    console.log(message);
  }
}
