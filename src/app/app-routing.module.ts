import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AppComponent } from './app.component';
import { KleintierpraxisComponent } from './pages/projects/kleintierpraxis/kleintierpraxis.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'kleintierpraxis', component: KleintierpraxisComponent},
  {path: '*', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
