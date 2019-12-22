import { Component } from '@angular/core';

import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  affiche = false;


constructor(private confirmationService: ConfirmationService) {}

    confirm() {

      console.log('ici confirm');
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                //Actual logic to perform a confirmation
                console.log('OK confimé');
            }
        });
    }


}
