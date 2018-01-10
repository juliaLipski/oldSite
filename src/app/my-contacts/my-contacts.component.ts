import { Component, OnInit } from '@angular/core';
import { myContactsService } from '../factory/myContactsService';
@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css']
})
export class MyContactsComponent implements OnInit {
  // data: any;
  myContacts: any;
  constructor(private myContactsService: myContactsService) {
    //         this.data = {
    //         lat:32.0997729;
    //         long: 34.89513950000003;
    //         city: "Petah tikva",
    //         email: "lepskyja@gmail.com",
    //        phone: "0535210844"
    // }
    //     this.myContactsService.setData(this.data)
  }

  ngOnInit() {
    this.myContactsService.getData().subscribe((myContacts) => {
      this.myContacts = myContacts
      console.log(this.myContacts)
    });
  }
}
