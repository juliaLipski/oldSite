import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Title } from '@angular/platform-browser';
// import { AuthService } from './../../factory/authService';
// import { ApiService } from './../../core/api.service';
// import { UtilsService } from './../../core/utils.service';
// import { FilterSortService } from './../../core/filter-sort.service';
// import { EventModel } from './../../core/models/event.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  // pageTitle = 'Admin';
  // eventsSub: Subscription;
  // eventList: EventModel[];
  // filteredEvents: EventModel[];
  // loading: boolean;
  // error: boolean;
  // query = '';

  // constructor(
  //   private title: Title,
  //   public auth: AuthService,
  //   private api: ApiService,
  //   public utils: UtilsService,
  //   public fs: FilterSortService) { }

  ngOnInit() {
    // this.title.setTitle(this.pageTitle);
    // this._getEventList();
  }

  // private _getEventList() {
  //   this.loading = true;
  //   // Get all (admin) events
  //   this.eventsSub = this.api
  //     .getAdminEvents$()
  //     .subscribe(
  //       res => {
  //         this.eventList = res;
  //         this.filteredEvents = res;
  //         this.loading = false;
  //       },
  //       err => {
  //         console.error(err);
  //         this.loading = false;
  //         this.error = true;
  //       }
  //     );
  // }

  // searchEvents() {
  //   this.filteredEvents = this.fs.search(this.eventList, this.query, '_id', 'mediumDate');
  // }

  // resetQuery() {
  //   this.query = '';
  //   this.filteredEvents = this.eventList;
  // }

  ngOnDestroy() {
    // this.eventsSub.unsubscribe();
  }

}
