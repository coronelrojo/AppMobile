import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { LandingPageRoutingModule } from "./landing-routing.module";
import { LandingPage } from "./landing.page";
import { LoginPageModule } from "../auth/login/login.module";
import { RegisterPageModule } from "../auth/register/register.module";

const routes: Routes = [
  {
    path: "",
    component: LandingPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageModule,
    RegisterPageModule,
    LandingPageRoutingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LandingPage],
  entryComponents: [],
})
export class LandingPageModule {}
