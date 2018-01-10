import { Component, Input, OnInit } from '@angular/core';
import { myContactsService } from '../factory/myContactsService';
declare var google: any

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number
  // = 32.0997729;
  lng: number
  //  = 34.89513950000003;
  zoom: number = 11;
  private map: any;

  constructor(private myContactsService: myContactsService) {
   
  }
  
  ngOnInit() {
    // .then(res => {
    //     this.data = res[0].frontend;
    //     this.config = new pieChartConfig('frontend ', 0.5);
    //     this.elementId = 'myPieChart1';
    //     this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
     this.myContactsService.getData().subscribe((myContacts) => {
      this.lat = myContacts[0].lat;
      this.lng = myContacts[0].long;
    })
      // .catch((err) => {
      //   console.log(err);
      // });
}
}