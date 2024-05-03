import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    //restructured the routes
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/:username', component: ProfileComponent },
    { path: 'create-user', component: CreateUserComponent },
    //still need to work on login
    { path: 'login', component: LoginComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
