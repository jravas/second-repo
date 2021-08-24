import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-three',
  template: `
    <p>
      three works!
    </p>
  `,
  styles: [
  ]
})
export class ThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
