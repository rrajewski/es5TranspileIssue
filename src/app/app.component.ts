import { Component, OnInit } from '@angular/core';

import { ExampleWithStaticMethod } from './example-with-static-method';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  example = {};

  ngOnInit(): void {
    ExampleWithStaticMethod.modifyObject(this.example);
  }
}
