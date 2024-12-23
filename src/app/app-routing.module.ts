import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'modal',
    component:ModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
