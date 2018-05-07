import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'one',
    templateUrl: './one.component.html'
})
export class OneComponent implements OnInit {
  showTimer = false;
  images: any = [];
  selectedAnswers: any = [];
  remainder: number = 10;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.get<string[]>('/url').subscribe(data => {
      this.images = this.shuffleArray(data);
      this.images.forEach((image) => {
        var object = {image};
        this.selectedAnswers.push(object);
      })
    });
  }

  update(image, e) {
    this.updateSelectedAnswers(this.selectedAnswers, image, e.srcElement.value);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  updateSelectedAnswers(array, image, value) {
    array.forEach((object) => {
      if (object.image == image) {
        object.value = value;
      }
    })
  }

  submit() {
    var id = this.route.snapshot.params['id'];
    this.http.post<any>('/one/' + id, this.selectedAnswers).subscribe(data => {
      setTimeout(() => {
        this.router.navigate([`/two/${data.id}`]);
      }, 10000);
      this.showTimer = true;
      setInterval(() => {
        this.remainder--;
      }, 1000);
    });
  }
}
