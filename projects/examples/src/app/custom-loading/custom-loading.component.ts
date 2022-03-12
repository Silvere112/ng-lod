import { Component } from '@angular/core';

@Component({
  template: `
    <div class="lds-facebook"><div></div><div></div><div></div></div>
  `,
  styles: [
    `
      :host {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.5);;
      }

      // From https://loading.io/css/
      .lds-facebook {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-facebook div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #fff;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      }
      .lds-facebook div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
      }
      .lds-facebook div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
      }
      .lds-facebook div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
      }
      @keyframes lds-facebook {
        0% {
          top: 8px;
          height: 64px;
        }
        50%, 100% {
          top: 24px;
          height: 32px;
        }
      }
    `
  ]
})
export class CustomLoadingComponent {}
