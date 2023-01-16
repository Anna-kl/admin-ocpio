import {Component, OnInit} from '@angular/core';
import {BusService} from "../../services/busEvents";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  token: string = '';
  constructor(private _busEvent: BusService) {
    this._busEvent.sendToken.subscribe(result =>
      this.token = result
    );
  }

  ngOnInit(): void {

    }

}
