import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SpaceXService } from "./services/spaceX.service";
import { LaunchesComponent } from "./components/launches.component";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { LaunchDetailsComponent } from './components/launch-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, LaunchesComponent, LaunchDetailsComponent],
  providers: [SpaceXService],
  bootstrap: [AppComponent]
})
export class AppModule {}
