import { Component, Input, OnInit } from "@angular/core";
import { combineLatest, map } from "rxjs";
import { ILaunch } from "../models/launch.model";
import { ILaunchpad } from "../models/launchpad.model";
import { SpaceXService } from "../services/spaceX.service";

@Component({
  selector: "app-launches",
  templateUrl: "./launches.component.html",
  styleUrls: ["./launches.component.css"]
})
export class LaunchesComponent implements OnInit {
  public launches: ILaunch[] = [];
  public launchpads: ILaunchpad[] = [];
  launchpadIdFilter: string;

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit() {
    this.spaceXService.getLaunches().subscribe(launches => {
      this.launches = this.sortLaunchesByNewestFirst(launches);
    });
    this.spaceXService.getLaunchpads().subscribe(launchpads => {
      this.launchpads = launchpads;
    });
  }

  sortLaunchesByNewestFirst(launches : ILaunch[]): ILaunch[] {
    return launches.sort((l1, l2) => { 
      return new Date(l2.date_utc).getTime() - new Date(l1.date_utc).getTime(); 
    });
  }

  getFilteredLaunches(): ILaunch[]  {
    return this.launches.filter(l => this.isLaunchVisible(l));
  }

  isLaunchVisible(launch : ILaunch): Boolean  {
    if(this.launchpadIdFilter != undefined) {
      return launch.launchpad === this.launchpadIdFilter;
    }
    return true;
  }

  clearFilter(): void {
    this.launchpadIdFilter = undefined;
  }
}
