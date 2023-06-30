import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultDialogComponent } from 'src/shared/components/default-dialog/default-dialog.component';
import { BaseForm } from 'src/shared/helpers/forms/base-form';
import { IScreen } from 'src/shared/helpers/responsive/iscreen';
import { ServersTextsProvidedServices } from './texts/servers-texts-provided-services';
import { VpnTextsProvidedServices } from './texts/vpn-texts-provided-services';
import { SupportTextsProvidedServices } from './texts/support-texts-provided-services';
import { LocalBackupTextsProvidedServices } from './texts/local-backup-texts-provided-services';
import { WiredNetworkTextsProvidedServices } from './texts/wired-network-texts-provided-services';
import { CloudBackupTextsProvidedServices } from './texts/cloud-backup-texts-provided-services';


@Component({
  selector: 'provided-services',
  templateUrl: './provided-services.component.html',
  styleUrls: ['./provided-services.component.css']
})
export class ProvidedServicesComponent extends BaseForm implements OnInit {
  constructor(
    override _breakpointObserver: BreakpointObserver,
    private _dialog: MatDialog
  ) { super(_breakpointObserver) }

  ngOnInit(): void {
    this.screen();
  }

  cardsCols: number = 3;
  cardsRowHeight: string = '120px';

  localBackupCardText = LocalBackupTextsProvidedServices.cardText;
  localBackupTexts = LocalBackupTextsProvidedServices.backupTexts();

  supportCardText = SupportTextsProvidedServices.cardText;
  supportTexts = SupportTextsProvidedServices.supportTexts();

  vpnCardText = VpnTextsProvidedServices.cardText;
  vpnTexts = VpnTextsProvidedServices.vpnTexts();

  serversCardText = ServersTextsProvidedServices.cardText
  serversTexts = ServersTextsProvidedServices.serversTexts();

  wiredNetworkCardText = WiredNetworkTextsProvidedServices.cardText;
  wiredNetworkTexts = WiredNetworkTextsProvidedServices.wiredNetworkTexts();

  cloudCardBackupText = CloudBackupTextsProvidedServices.cardText;
  cloudBackupTexts = CloudBackupTextsProvidedServices.cloudBackupTexts();

  screen() {
    this.screenSize().subscribe({
      next: (result: IScreen) => {
        switch (result.size) {
          case 'xsmall': {
            this.cardsCols = 1;
            //this.spacing = 'margin-top:-100px;';
            break;
          }
          case 'small': {
            this.cardsCols = 1;
            break;
          }
          case 'medium': {
            this.cardsCols = 2;
            break;
          }
          case 'large': {
            this.cardsCols = 3;
            break;
          }
          case 'xlarge': {
            this.cardsCols = 3;
            break;
          }
        }
      }
    })





  }

  openDialog(item: string, data: string[]) {
    let dialogRef = this._dialog.open(DefaultDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: { title: item, body: data }
    });

  }

}
