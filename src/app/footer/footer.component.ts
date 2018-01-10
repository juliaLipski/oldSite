import { Component, OnInit } from '@angular/core';
import { myContactsService } from '../factory/myContactsService'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   myContacts: any;
  constructor(private myContactsService: myContactsService) { }

  ngOnInit() {
    this.myContactsService.getData().subscribe((myContacts) => {
      this.myContacts = myContacts
      console.log(this.myContacts)
    });
  }

}
