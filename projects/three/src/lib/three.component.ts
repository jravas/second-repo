import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'lib-three',
  template: `
    <p>
      second repo lib three another change
    </p>
  `,
  styles: []
})
export class ThreeComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}
}
