import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UtilsService } from "../../../services/utils.service";

@Component({
  selector: "app-notification-gift",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./notification-gift.component.html",
  styleUrl: "./notification-gift.component.scss",
})
export class NotificationGiftComponent implements OnInit {
  code: string = "";
  isVip: boolean = false;
  gift: string = "";
  constructor(private router: Router, private utils: UtilsService) {}

  ngOnInit(): void {
    const IS_VIP = sessionStorage.getItem("isV") || "";
    const CODE = sessionStorage.getItem("code") || "";
    const GIFT = sessionStorage.getItem("gn") || "";
    const IS_PLAY = sessionStorage.getItem("ip") || "";
    this.isVip = IS_PLAY ? true : false;
    if (GIFT && IS_PLAY) {
      this.isVip = IS_VIP ? true : false;
      this.code = CODE;
      this.gift = GIFT;
    } else {
      this.continuePLay();
    }
  }

  continuePLay() {
    if (this.isVip) {
      this.router.navigate(["vip/" + this.code]).then(() => {
        this.utils.clearSessionStorage();
      });
    } else {
      this.router.navigate(["registration"]).then(() => {
        this.utils.clearSessionStorage();
      });
    }
  }
}
