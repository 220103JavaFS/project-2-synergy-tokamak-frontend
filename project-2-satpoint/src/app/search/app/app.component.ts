import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter';

  term: string="";
 
  filterData = [
    {
      satname: 'Cel',
      satId: '1234',
      latitude: '7687 Jadon Port',
      longitude: '7687 Jadon Port',
      altitude: '7687 Jadon Port',
      azimuth: '7687 Jadon Port',
      elevation: '7687 Jadon Port',
      rightAccentation: '7687 Jadon Port',
      declination: '7687 Jadon Port',
      favorites: '7687 Jadon Port'
    },
    {
      satname: 'stine',
      satId: '45l',
      latitude: '7687 Jadon Port',
      longitude: '7687 Jadon Port',
      altitude: '7687 Jadon Port',
      azimuth: '7687 Jadon Port',
      elevation: '7687 Jadon Port',
      rightAccentation: '7687 Jadon Port',
      declination: '7687 Jadon Port',
      favorites: '7687 Jadon Port'
    },
    {
      satname: 'lesine',
      satId: '4321',
      latitude: '7687 Jadon Port',
      longitude: '7687 Jadon Port',
      altitude: '7687 Jadon Port',
      azimuth: '7687 Jadon Port',
      elevation: '7687 Jadon Port',
      rightAccentation: '7687 Jadon Port',
      declination: '7687 Jadon Port',
      favorites: '7687 Jadon Port'
    },
    {
      satname: 'Cetine',
      satId: '5612',
      latitude: '7687 Jadon Port',
      longitude: '7687 Jadon Port',
      altitude: '7687 Jadon Port',
      azimuth: '7687 Jadon Port',
      elevation: '7687 Jadon Port',
      rightAccentation: '7687 Jadon Port',
      declination: '7687 Jadon Port',
      favorites: '7687 Jadon Port'
    },
    {
      satname: 'Ceko',
      satId: '4326',
      latitude: '7687 Jadon Port',
      longitude: '7687 Jadon Port',
      altitude: '7687 Jadon Port',
      azimuth: '7687 Jadon Port',
      elevation: '7687 Jadon Port',
      rightAccentation: '7687 Jadon Port',
      declination: '7687 Jadon Port',
      favorites: '7687 Jadon Port'
    }
  ]
}
