import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ILaunch } from '../models/launch.model';
import { SpaceXService } from '../services/spaceX.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  public launch: ILaunch;

  constructor(private route: ActivatedRoute, private location: Location, private spaceXService: SpaceXService) { 
  }

  ngOnInit(): void {
    this.spaceXService.getLaunch(this.route.snapshot.paramMap.get('id')).subscribe(launch => {
      this.launch = launch;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
