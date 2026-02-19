import { Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { AboutComponent } from './comps/about/about.component';
import { HomeComponent } from './comps/home/home.component';
import { UserInteractionComponent } from './user-interaction/user-interaction.component';
import { GradeCalculatorComponent } from './grade-calculator/grade-calculator.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path:'about',
        component: AboutComponent,
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {path: 'user-interaction', component:UserInteractionComponent},
    {path: 'grade-calculator', component: GradeCalculatorComponent}

];
