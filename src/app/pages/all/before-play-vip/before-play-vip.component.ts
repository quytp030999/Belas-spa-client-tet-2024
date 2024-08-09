import { Component, OnInit } from "@angular/core";
import { ApisService } from "../../../services/apis.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UtilsService } from "../../../services/utils.service";

@Component({
  selector: "app-before-play-vip",
  standalone: true,
  imports: [],
  templateUrl: "./before-play-vip.component.html",
  styleUrl: "./before-play-vip.component.scss",
})
export class BeforePlayVipComponent implements OnInit {
  constructor(
    private apis: ApisService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    const CODE = this.activeRoute.snapshot.paramMap.get("code") || "";
    if (!this.utils.validateString(CODE)) {
      this.router.navigate(["registration"]).then(() => {
        this.utils.clearSessionStorage();
      });
    } else {
      this.getAwardVip(CODE);
    }
  }

  getAwardVip(code: string) {
    this.apis.getAwardVip(code).subscribe({
      next: (response: any) => {
        switch (parseInt(response.status)) {
          case 1: // success
            this.router.navigate(["/game-play"]).then(() => {
              const { giftCode, totalTurn } = response;
              sessionStorage.setItem("code", code);
              sessionStorage.setItem("g", JSON.stringify(giftCode));
              sessionStorage.setItem("t", totalTurn);
              sessionStorage.setItem("isV", "true");
            });
            break;
          case -2: // param invalid or fail
            this.utils.setMessage("Tham số không hợp lệ!");
            this.utils.showMessage();
            break;
          case -3: // code invalid
            this.utils.setMessage("Code không hợp lệ!");
            this.utils.showMessage();
            break;
          case -4: // code limit
            this.utils.setMessage("Bạn đã hết lượt tham gia!");
            this.utils.showMessage();
            break;
          default:
            this.utils.setMessage("Hệ thống gặp vấn đề!");
            this.utils.showMessage();
            break;
        }
      },
      error: (error) => {
        this.utils.setMessage("Hệ thống gặp vấn đề!");
        this.utils.showMessage();
      },
      complete: () => {},
    });
  }
}
