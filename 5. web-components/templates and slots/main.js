customElements.define('my-template',

  class extends HTMLElement {
    
    constructor() {
      super();
      const template = document.getElementById('my-template');
      const templateContent = template.content;

      this.attachShadow({mode: 'closed'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

const slottedSpan = document.querySelector('my-template span');

console.log(slottedSpan.slot);