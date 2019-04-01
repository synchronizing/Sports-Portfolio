import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent implements OnInit {

  @Input() user: any = {};

  constructor(
  ) { }

  ngOnInit() {
  }

}
