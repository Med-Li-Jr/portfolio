import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardProjectComponent } from './components/projects/card-project/card-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SideProjectComponent } from './components/projects/side-project/side-project.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: "", component: MainLayoutComponent
  },
]
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  HomeComponent,
  HomeComponent,
  QuoteComponent,
  SkillsComponent,
  ProjectsComponent,
  AboutComponent,
  MenuComponent,
  MainLayoutComponent,
  CardProjectComponent,
  SideProjectComponent
]