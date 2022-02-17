import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SatService } from 'src/app/services/sat.service';
import { SidePanelService } from 'src/app/services/side-panel.service';


@Component({
  selector: 'app-sat-info',
  templateUrl: './sat-info.component.html',
  styleUrls: ['./sat-info.component.css'],
})

export class SatInfoComponent implements OnInit {
  @Input() satname: string = '';
  @Input() satId: number = 0;
  @Input() noradId: string = '';
  @Input() satPicture: string = '';
  @Input() numFavorites: number = 0;

  @Input() latitude: string = '';
  @Input() longitude: string = '';
  @Input() altitude: string = '';

  @Input() azimuth: string = '';
  @Input() elevation: string = '';

  @Input() rightAccention: string = '';
  @Input() declination: string = '';

  @Input() timestamp: string = '';

  @Output() togglePanelStateEvent = new EventEmitter<any>();

  constructor(
    private panelService: SidePanelService,
    private satService: SatService
  ) {}

  ngOnInit(): void {
    console.log(this.noradId);
  }

  getTimestampMillis(): number {
    return Number(this.timestamp) * 1000;
    
  }

  refreshData(): void {
    
    this.satService.getSatLocData(this.noradId).subscribe({
      next: (data: any) => {
        let positions: any = data.positions[0];
        this.latitude = positions.satlatitude;
        this.longitude = positions.satlongitude;
        this.altitude = positions.sataltitude;
        this.azimuth = positions.azimuth;
        this.elevation = positions.elevation;
        this.rightAccention = positions.ra;
        this.declination = positions.dec;
        this.timestamp = positions.timestamp;
      },
    });



  }

  toggleSidePanelEvent() {
    //this.panelService.togglePanelState();
    this.panelService.setShowPanel(true);
    console.log(this.satId)
    console.log(this.satname)


    this.togglePanelStateEvent.emit({
      showPanel: this.panelService.getShowPanel(),
      name: this.satname,
      id: this.satId,
      satNoradId: this.noradId
    });
  }
}
