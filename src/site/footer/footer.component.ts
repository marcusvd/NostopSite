import { Component, OnInit } from '@angular/core';
import { BaseForm } from 'src/shared/helpers/forms/base-form';
import { IScreen } from 'src/shared/helpers/responsive/iscreen';

@Component({
  selector: 'main-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent extends BaseForm implements OnInit {

  ngOnInit(): void {
    this.screen();
  }

  fxLayout: string = 'row';
  fxLayoutGap: string = '300';
  screen() {
    this.screenSize().subscribe({
      next: (result: IScreen) => {
        switch (result.size) {
          case 'xsmall': {
            this.fxLayout = 'column'
            this.fxLayoutGap = '10';
            break;
          }
          case 'small': {
            this.fxLayout = 'column'
            this.fxLayoutGap = '10';
            break;
          }
          case 'medium': {
            this.fxLayout = 'row'
            this.fxLayoutGap = '100';
            break;
          }
          case 'large': {
            this.fxLayout = 'row'
            this.fxLayoutGap = '300';
            break;
          }
          case 'xlarge': {
            this.fxLayout = 'row'
            this.fxLayoutGap = '300';
            break;
          }
        }
      }
    })





  }

}
