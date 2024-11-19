import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: 'full'},
    {path: "home", component: BodyComponent},

    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "profile", component: ProfileComponent},

    {path: "404", component: ErrorPageComponent},
    {path: "**", redirectTo: "/404", pathMatch: 'full'},
];
