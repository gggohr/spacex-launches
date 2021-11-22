import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILaunch } from "../models/launch.model";
import { ILaunchpad } from "../models/launchpad.model";
import { map } from "rxjs/operators";

@Injectable()
export class SpaceXService {
  
  private uri: string = "https://api.spacexdata.com/v4/";

  constructor(private http: HttpClient) {}

  public getLaunches(): Observable<ILaunch[]> {
    return this.http
      .get<ILaunch[]>(`${this.uri}launches`)
      .pipe(map((resp: ILaunch[]) => resp));
  }

  public getLaunch(id: string): Observable<ILaunch> {
    return this.http
      .get<ILaunch>(`${this.uri}launches/${id}`)
      .pipe(map((resp: ILaunch) => resp));
  }

  public getLaunchpads(): Observable<ILaunchpad[]> {
    return this.http
      .get<ILaunchpad[]>(`${this.uri}launchpads`)
      .pipe(map((resp: ILaunchpad[]) => resp));
  }
}
