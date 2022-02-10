import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sat-info',
  templateUrl: './sat-info.component.html',
  styleUrls: ['./sat-info.component.css'],
})
export class SatInfoComponent implements OnInit {
  @Input() satname: string = '';
  @Input() satid: string = '';
  
  @Input() latitude: string = '';
  @Input() longitude: string = '';
  @Input() altitude: string = '';

  @Input() azimuth: string = '';
  @Input() elevation: string = '';

  @Input() rightAccention: string = '';
  @Input() declination: string = '';
  
  @Input() timestamp: string = '';

  constructor() {}

  ngOnInit(): void {}

  getTimestampMillis(): number {
    return Number(this.timestamp) * 1000;
  }
}
