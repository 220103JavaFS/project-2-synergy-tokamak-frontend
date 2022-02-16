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
  @Input() term = ""

  public satList: any[] = [
    {
      satName: 'INTERNATIONAL SPACE STATION',
      satId: 25544,
      satPicture: 'https://www.nasa.gov/sites/default/files/s132e012209_sm.jpg',
      numFavorites: 10,
    },
    {
      satName: 'SES 1',
      satId: 36516,
      satPicture: '',
      numFavorites: 3,
    },
    {
      satName: 'NOAA 19',
      satId: 33591,
      satPicture: '',
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

  filterSatList(){
    console.log("satlisting");
    console.log(this.term)
    if(this.term) {
    return this.satList.filter(sat => {
      if(sat.satName.toLowerCase().includes(this.term) || sat.satId.toString().includes(this.term)){
        return sat;
      }
    })
  }
    return this.satList;
  }

  togglePanelStateEvent(info: string) {
    console.log('2');

    this.showPanelMethodEvent.emit(info);
  }
}
