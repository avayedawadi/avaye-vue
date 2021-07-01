import { __decorate } from "tslib";
import { html, css, LitElement, property } from 'lit-element';

export class TheGallery extends LitElement {
    constructor() {
        super(...arguments);

        this.slotElement = this.querySelectorAll("img");
        this.imageIndex = 0;
        this.buttonOnTop = "false";
        this.selectionIndicator = "true"

        window.onload = function() {
          if(!window.location.hash) {
              window.location = window.location + '#loaded';
              window.location.reload();
          }
      }
        
        
    }
    render() {
        return html `
      <p class="imageCounter">${this.imageIndex + 1 + "/" + this.slotElement.length}</p>
      <div class="contain">
      <button style="display: ${this.buttonOnTop === "true" ? '' : 'none'}"  class="left slideButton" @click="${this._decrement}">&#10094;</button>
      <img src="${this.slotElement.length > 0 && this.slotElement[this.imageIndex].currentSrc}"></img>
      <button style="display: ${this.buttonOnTop === "true" ? '' : 'none'}" class="right slideButton" @click="${this._increment}">&#10095;</button>
      </div>
      <div class="buttonContain">
      <button style="display: ${this.buttonOnTop === "true" ? 'none' : ''}" class="left slideButton" @click="${this._decrement}">&#10094;</button>
      ${this._anchors()}
      <button style="display: ${this.buttonOnTop === "true" ? 'none' : ''}" class="right slideButton" @click="${this._increment}">&#10095;</button>
      </div>
      `;
    }
    //<p class="counter">Image: ${this.imageIndex+1}/${this.slotElement.length}</p>
    _increment() {
        if (this.imageIndex < this.slotElement.length - 1) {
            this.imageIndex++;
        }
        else {
            this.imageIndex = 0;
        }
    }
    _decrement() {
        if (this.imageIndex > 0) {
            this.imageIndex--;
        }
        else {
            this.imageIndex = this.slotElement.length - 1;
        }
    }
    _anchors() {
        var str1 = document.createElement('div');
        str1.className = "anchorsDiv";
        for (let i = 0; i < this.slotElement.length; i++) {
            var button = document.createElement('img');
            button.className = "selectionButton";
            button.innerHTML = i.toString();
            button.src = this.slotElement[i].currentSrc;
            button.onclick = () => { this.imageIndex = i; };
            button.style.border = "5px solid black";
            if (i == this.imageIndex) {
                button.style.opacity = '100%';
                console.log(this.selectionIndicator);
                button.style.borderTop = (this.selectionIndicator === "true" ? "thick solid #00fab7" : "5px solid black");
                console.log(button.style.borderTop);
            }
            str1.appendChild(button);
        }
        return html `${str1}`;
        /*const imgArray = Array.prototype.slice.call(this.slotElement);
        console.log(imgArray)
        return html`
          <div class="anchorsDiv">
            ${repeat(imgArray, (img) => img.src, (img, index) => html`
                <button style=${index==this.imageIndex ? "opacity: 100%  border-top: thick solid #00fab7" : ""} src=${img.src} class="selectionButton" onClick=${this.imageIndex = index}></button>
            `)}
          </div>
        `;*/
    }
    static get styles() {
        return css `.hidden {
      visibility:hidden;
    }
  
    :host {
      display: block;
      padding: 8px;
      height: 50%;
      background-color: transparent;
    }
  
    .contain {
      text-align:center;
      line-height:10%;
      height:var(--the-gallery-height,300px);
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  
    .buttonContain{
      text-align:center;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    img{
      display: inline-block;
      max-height:100%;
      text-align: center;
      margin: 10%;
    }
  
    .slideButton {
      height:100px;
      width:50px;
  
      margin: 0;
      position: relative;
  
      background-color: transparent;
      border: black;
  
      font-size: 40px;
      line-height:100px;
      border-radius: 20%;
      border: 2px solid black;
      padding-bottom: 100px;
      
  
      transition-duration: 0.4s;
      
    }
    .slideButton:hover{
      background-color: black;
      color: white;
    }
    .left{
      left:5%;
    }
    .right{
      right:5%;
    }
  
    .counter {
      margin: 0;
      position: relative;
      top: 5%;
      right: 5%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  
    .anchorsDiv{
      display: flex;
      justify-content: center;
      line-height:100px;
      height:100px;
      max-width: 80%;
      overflow-y:hidden;
      overflow-x:hidden;
      margin-top: 20px;
      margin-left: 7%;
      margin-right:7%;
      flex-direction: row;
      min-width: 0%;
    }
  
    .selectionButton{
      height:70px;
      opacity: 70%;
      transition-duration:0.4s;
      object-fit: contain;
      margin: 0px;
      overflow-x:scroll;
      cursor:pointer;
      
      
  
    }
    .selectionButton:hover{
        opacity: 100%;
    }
  
  .imageCounter{
      margin-left:70%;
  }`;
    }
}
__decorate([
    property()
], TheGallery.prototype, "imageIndex", void 0);
__decorate([
    property()
], TheGallery.prototype, "buttonOnTop", void 0);
__decorate([
  property()
], TheGallery.prototype, "selectionIndicator", void 0);
//# sourceMappingURL=TheGallery.js.map