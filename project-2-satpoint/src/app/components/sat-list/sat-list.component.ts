import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { SatService } from 'src/app/services/sat.service';
import { SidePanelService } from 'src/app/services/side-panel.service';

@Component({
  selector: 'app-sat-list',
  templateUrl: './sat-list.component.html',
  styleUrls: ['./sat-list.component.css'],
})
export class SatListComponent implements OnInit {
  @Output() showPanelMethodEvent = new EventEmitter<string>();

  public satList: any[] = [
    {
      satName: 'INTERNATIONAL SPACE STATION',
      satId: 25544,
      url: 'https://www.nasa.gov/sites/default/files/s132e012209_sm.jpg',
      numFavorites: 10,
    },
    {
      satName: 'SES 1',
      satId: 36516,
      url: '',
      numFavorites: 3,
    },
    {
      satName: 'NOAA 19',
      satId: 33591,
      url: '',
      numFavorites: 5,
    },
  ];

  constructor(
    private satService: SatService,
    private panelService: SidePanelService
  ) {}

  ngOnInit(): void {}

  getSatList(): void {
    //make api call to our DB and set satList to the list of sat objects we get back
  }

  togglePanelStateEvent(info: string) {
    console.log('2');

    this.showPanelMethodEvent.emit(info);
  }
}
