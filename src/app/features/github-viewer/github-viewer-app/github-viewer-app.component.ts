import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-viewer-app',
  templateUrl: './github-viewer-app.component.html',
  styleUrls: ['./github-viewer-app.component.scss']
})
export class GithubViewerAppComponent implements OnInit {

  isDarkTheme = false;
  constructor() { }

  ngOnInit() {
  }

}
