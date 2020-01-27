import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogComponent } from './views/blog/blog.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'about'},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  // {path: 'projects/:id', component: ProjectDetailComponent},
  {path: 'blog', component: BlogComponent},
  //{path: 'blog/:id, component: BlogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
