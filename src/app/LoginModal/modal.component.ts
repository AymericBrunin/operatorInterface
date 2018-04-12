import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-content.html',
  styleUrls: ['./modal-content.css']
})
export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html',
  styleUrls: ['./modal-component.css']
})
export class NgbdModalComponent {
  @Input() title:string;

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }
}