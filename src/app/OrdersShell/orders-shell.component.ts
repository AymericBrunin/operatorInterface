import { Component } from '@angular/core';


@Component({
  selector: "show-orders",
  templateUrl: './orders-shell.component.html',
  styleUrls: ['./orders-shell.component.css'],
})

export class OrdersShellComponent {
  visible: boolean=window.innerWidth>750;

  goToStart():void { 
    window.location.href="https://139.13.82.31:4200; // 192.168.200.172:4200"
  }

  toggleClass():void{
    this.visible=!this.visible;
  }
}