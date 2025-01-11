import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
    // {
    //     path: '',
    //     // redirectTo: 'top-trackers/home',
    //     redirectTo: 'portfolio',
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'portfolio',
    //     component: PortfolioComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled', // Enables scroll restoration
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
