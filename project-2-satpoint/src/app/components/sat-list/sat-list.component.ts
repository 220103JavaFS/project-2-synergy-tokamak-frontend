import { Component, OnInit } from '@angular/core';
import { SatService } from 'src/app/services/sat.service';

@Component({
  selector: 'app-sat-list',
  templateUrl: './sat-list.component.html',
  styleUrls: ['./sat-list.component.css'],
})
export class SatListComponent implements OnInit {
  public satList: any[] = [
    {
      info: {
        satname: 'SPACE STATION',
        satid: 25544,
        transactionscount: 1,
      },
      positions: [
        {
          satlatitude: -51.66447573,
          satlongitude: 79.40437695,
          sataltitude: 438.88,
          azimuth: 149.78,
          elevation: -83.89,
          ra: 156.59594306,
          dec: -46.52067598,
          timestamp: 1644435009,
          eclipsed: true,
        },
      ],
    },
    {
      info: {
        satname: 'SES 1',
        satid: 36516,
        transactionscount: 0,
      },
      positions: [
        {
          satlatitude: 0.02843198,
          satlongitude: -100.96465635,
          sataltitude: 35787.61,
          azimuth: 194.81,
          elevation: 41.12,
          ra: 64.82099023,
          dec: -6.41584029,
          timestamp: 1644457726,
          eclipsed: false,
        },
      ],
    },
    {
      info: {
        satname: 'NOAA 19',
        satid: 33591,
        transactionscount: 1,
      },
      positions: [
        {
          satlatitude: 36.91127914,
          satlongitude: 86.75628284,
          sataltitude: 847.98,
          azimuth: 1.79,
          elevation: -47.9,
          ra: 260.09452169,
          dec: 0.70396699,
          timestamp: 1644458994,
          eclipsed: false,
        },
      ],
    },
  ];

  constructor(private satService: SatService) {}

  ngOnInit(): void {}

  getSatList(): void {}
}
