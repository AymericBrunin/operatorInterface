import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: "scanner",
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {
  result = "Waiting for an order";
  videoShow: boolean;
  videoStream:any;
  constructor(private router: Router, private zone: NgZone) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.videoStream=stream
          this.videoShow = true;
        }).catch(err => this.videoShow = false)
    }
  }

  decodedOutput(decoded: any): void {
    this.videoStream.getTracks()[0].stop();
    this.zone.run(() => this.router.navigate(['showOrders/', +decoded]));
  }
}