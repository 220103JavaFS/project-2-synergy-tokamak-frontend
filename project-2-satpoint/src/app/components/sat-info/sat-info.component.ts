import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SidePanelService } from 'src/app/services/side-panel.service';

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

  @Output() togglePanelStateEvent = new EventEmitter<any>();

  constructor(private panelService:SidePanelService) {}

  ngOnInit(): void {}

  getTimestampMillis(): number {
    return Number(this.timestamp) * 1000;
  }

  toggleSidePanelEvent() {
    
    //this.panelService.togglePanelState();
    this.panelService.setShowPanel(true);
    console.log("1")

      this.togglePanelStateEvent.emit(
        {
          "showPanel":this.panelService.getShowPanel(),
          "name":this.satname,
          "id":this.satid
        }
      )
  }
}
