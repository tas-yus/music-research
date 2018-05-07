import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  start() {
    this.http.post<any>('/starter', null).subscribe(data => {
      this.router.navigate([`/one/${data.id}`]);
    });
  }
}
