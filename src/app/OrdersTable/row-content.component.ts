import { Component, Input } from '@angular/core';
import { saveAs } from 'file-saver';
import { Order } from '../Order/order.component';
import {Router} from '@angular/router';

@Component({
  selector: 'thing',
  templateUrl: "./row-content.component.html",
  styleUrls: ["./row-content.component.css"]
})

export class RowContentComponent {
  @Input() wholeRow: any = {};
  @Input() data: Order[];
  @Input() oneOrder:boolean;
  confirmationVisible;
  constructor(private router:Router) {
    this.confirmationVisible = false;
  }

	

  download(): void {
	var str = this.wholeRow.row.description;
	str.replace("<p>", "");
	str.replace("</p>", "");
	str.replace("<br />", "");
	str = str.replace(/;/g, "");
	str = str.replace(/[^\x20-\x7E]+/g, '');
    saveAs(new Blob([str], { type: "text" }), "Gravurtext.txt");
  }

  startOrder(): void {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] == this.wholeRow.row) {
       if(this.data[i].status !== "Done")
        this.data[i].status = "Started";
      }
    }
  }

  stopOrder(): void {
    if (this.wholeRow.row.status == "Started")
      this.confirmationVisible = true;
  }

  deleteOrder(): void {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] == this.wholeRow.row) {
        this.data[i].status = "Done";
      }
    }
    this.confirmationVisible = false;
    if(this.oneOrder){
      this.router.navigate(['showOrders/scanner']);
    }
    
  }

  cancelDelete(): void {
    this.confirmationVisible = false;
  }

}