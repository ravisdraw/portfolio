import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './portfolio/resume/resume.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { AchievementsComponent } from './portfolio/achievements/achievements.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ResumeComponent,
    ProjectsComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicModule.forRoot({}),
    BrowserAnimationsModule,
    ReactiveFormsModule 
  ],
  providers: [Window],
  bootstrap: [AppComponent]
})
export class AppModule { }
