import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'inv-config-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public title = 'App title';
  constructor() {}

  ngOnInit() {}
}
