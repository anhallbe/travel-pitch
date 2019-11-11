import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  nextClicked() {
    this.next.emit();
  }

  previousClicked() {
    this.previous.emit();
  }
}
