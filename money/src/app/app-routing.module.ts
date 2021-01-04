import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisaComponent } from "./components/divisa/divisa.component";

const routes: Routes = [
  { path: '', component: DivisaComponent },
  { path: 'divisas', component: DivisaComponent },
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
