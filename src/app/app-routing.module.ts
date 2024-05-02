import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'profile', component: ProfileComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}