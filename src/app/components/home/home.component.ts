import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'easy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstDashboard = null;
  title = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'E', 'a', 's', 'y', 'C', 'o', 'u', 'n', 't', '!'];

  constructor(
    private localStorage: LocalStorageService,
  ) {}

  ngOnInit() {
    this.firstDashboard = this.localStorage.get('numberOfDashboards') ? false : true;
  }
}
