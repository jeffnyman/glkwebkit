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
    let element = document.querySelector("#error #content");

    if (!element) {
      return;
    }

    this.removeDomChildren(element);
    element.appendChild(document.createTextNode(message));

    element = document.getElementById("error");
    element.classList.remove("hidden");
  }

  removeDomChildren(parent) {
    const children = parent.childNodes;

    while (children.length > 0) {
      const childObject = children.item(0);
      parent.removeChild(childObject);
    }
  }
}
