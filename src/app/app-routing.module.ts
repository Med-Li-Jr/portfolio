import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListProjectComponent } from './components/projects/list-project/list-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  // {
  //   path: "", redirectTo: "/home", pathMatch: "full"
  // },
  {
    path: "", component: MainLayoutComponent
  },
  {
    path: "projects", component: ListProjectComponent
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
  ContactComponent,
  MenuComponent,
  ListProjectComponent,
  MainLayoutComponent
]