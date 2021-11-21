import { Component, Input, OnInit } from "@angular/core";
import { ILaunch } from "../models/launch.model";
import { SpaceXService } from "../services/spaceX.service";

@Component({
  selector: "app-launches",
  templateUrl: "./launches.component.html",
  styleUrls: ["./launches.component.css"]
})
export class LaunchesComponent implements OnInit {
  public launches: ILaunch[] = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit() {
    this.spaceXService.getLaunches().subscribe(r => {
      this.launches = r;
    });
  }
}
