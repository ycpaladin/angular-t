import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable, of, zip, forkJoin, combineLatest } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "nz-demo-select-scroll-load",
  template: `
    <button nz-button (click)="click()">
      click me
    </button>
  `,
  styles: []
})
export class NzDemoSelectScrollLoadComponent implements OnInit {
  click() {
    console.log("---------------------------------------");
    const a$ = of(1, 2, 3);
    const b$ = of("A", "B", "C");
    const c$ = of("a", "b", "c");

    combineLatest([a$, b$, c$]).subscribe(console.log);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
