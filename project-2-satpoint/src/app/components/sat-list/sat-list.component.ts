import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Sat } from 'src/app/models/sat';
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
  @Input() page = ""

  baseURL: string = "http://localhost:8080/";

  public globalSatList: Sat[] = [];
  public userSatList: Sat[] = [];
  public satList: Sat[] = [];

  responseStatus: number = 0;


  constructor(
    private satService: SatService,
    private panelService: SidePanelService
  ) {}

  ngOnInit(): void {
    let id = localStorage.getItem('id');
    if(this.satService.checkRoute() === 'homepage')
    {
      console.log("Getting global favorites");
      this.getSatListByFavorites();
    }
    else if(this.page = "favorites")
    {
      if(id)
      {
        this.getSatListByUserFavorites(parseInt(id));
        this.satList = this.userSatList;
        console.log("Getting user favorites");
      }
        console.log("Error getting user favorites");
    }
    console.log("None");
    console.log(this.page);
  }

  getSatListByFavorites(){
    this.satService.getSatFavorites().subscribe(
      (response: Sat[]) => {
        this.globalSatList = response;
        this.satList = this.globalSatList;
      }
    )
  }

  getSatListByUserFavorites(id: number){
    this.satService.getSatFavoritesByUser(id).subscribe(
      (response: Sat[]) => {
        this.userSatList = response;
        
        //console.log(response);
      },
      err => {
        console.log("Error caught at Subscriber :" + err);
      },
      () => console.log("Processing Complete")
    )
  }

  public trackItem(index: number, item: Sat){
    return item.satId;
  }

  // filterSatList(){
  //   console.log("satlisting");
  //   console.log(this.term)
  //   if(this.term) {
  //   return this.globalSatList.filter(sat => {
  //     if(sat.satName.toLowerCase().includes(this.term) || sat.satId.toString().includes(this.term)){
  //       return sat;
  //     }
  //   })
  // }
  //   return this.globalSatList;
  // }

  togglePanelStateEvent(info: string) {
    console.log('2');

    this.showPanelMethodEvent.emit(info);
  }
}
