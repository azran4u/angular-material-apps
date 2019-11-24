import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.usePromise();
  }

  async createPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        console.log('promise is running');
        resolve(1);
      }, 1000);
    });
  }

  usePromise() {
    this.createPromise();
  }
}
