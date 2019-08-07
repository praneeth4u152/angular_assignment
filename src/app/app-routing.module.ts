import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:TestComponent},//activate  routeguard service to ask login when other pages are accessed
  {path:'test',component:TestComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
