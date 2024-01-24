import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonModal) modal?: IonModal;
  presentingElement?: HTMLElement;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page') || undefined;
  }

  closeModal() {
    this.modal?.dismiss(null, 'cancel').catch(() => {});
  }
}
