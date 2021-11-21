import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILaunch } from "../models/launch.model";
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
}
