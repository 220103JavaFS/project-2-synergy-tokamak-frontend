import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ExternalService } from 'src/app/services/external.service';

@Component({
  selector: 'app-external-panel',
  templateUrl: './external-panel.component.html',
  styleUrls: ['./external-panel.component.css']
})
export class ExternalPanelComponent implements OnInit {

  page="add"
  term=""
  constructor(private service:ExternalService) {

  }

  ngOnInit(): void {
  }
  
  filter(event:string){
    this.term = event;
  }
  

}
