import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
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
  @Input() page = ""
  @Input() term = ""

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
    let id = sessionStorage.getItem('userId');
    if(this.page == "mainPage")
    {
      console.log("Getting global favorites");
      this.getSatListByFavorites();
    }
    else if(this.page == "userFavorites")
    {
      console.log(id)
      if(id)
      {
        this.getSatListByUserFavorites(parseInt(id));
        this.satList = this.userSatList;
        console.log("Getting user favorites");
      }
      else {
        console.log("Error getting user favorites");
      }
    }
  }

  filterSatList(){
    console.log(this.page)
    if(this.term) {
      if(this.page == "mainPage") {
        return this.globalSatList.filter(sat => {
          if(sat.satName.toLowerCase().includes(this.term) || sat.noradId.toString().includes(this.term)){
            console.log(sat);
            return sat;
          }
          return;
        })
      }
      else{
        console.log("favories filter")
        return this.userSatList.filter(sat => {
          if(sat.satName.toLowerCase().includes(this.term) || sat.satId.toString().includes(this.term)){
            console.log(sat)
            return sat;
          }
          return;
        })

      }
  }
    if(this.page == "mainPage") return this.globalSatList;
    else return this.userSatList;
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
    console.log(id);
    console.log("in get sat list by user")
    this.satService.getSatFavoritesByUser(id).subscribe(
      (response: Sat[]) => {
        this.userSatList = response;        
        console.log(response);
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

  togglePanelStateEvent(info: string) {
    console.log("in sat list event");
    console.log(info)

    this.showPanelMethodEvent.emit(info);
  }
}
