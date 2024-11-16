import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
    {path: "", component: BodyComponent},
    {path: "**", component: ErrorPageComponent},
];
