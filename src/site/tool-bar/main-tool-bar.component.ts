import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BaseForm } from 'src/shared/helpers/forms/base-form';
import { IScreen } from 'src/shared/helpers/responsive/iscreen';

@Component({
  selector: 'main-tool-bar',
  templateUrl: './main-tool-bar.component.html',
  styleUrls: ['./main-tool-bar.component.css']
})
export class MainToolBarComponent extends BaseForm implements OnInit {
  constructor(override _breakpointObserver: BreakpointObserver) { super(_breakpointObserver) }
  ngOnInit(): void {
    this.screen();
  }

  showHidden: boolean = false;

  screen() {
    this.screenSize().subscribe({
      next: (result: IScreen) => {
        switch (result.size) {
          case 'xsmall': {
            this.showHidden = true;
            break;
          }
          case 'small': {
            this.showHidden = false;
            break;
          }
          case 'medium': {
            this.showHidden = false;
            break;
          }
          case 'large': {
            this.showHidden = false;
            break;
          }
          case 'xlarge': {
            this.showHidden = false;
            break;
          }
        }
      }
    })





  }
}
