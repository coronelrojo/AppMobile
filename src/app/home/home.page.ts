import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {}

  ngOnInit() {}
  dismissRegister() {
    this.modalController.dismiss();
  }
}
