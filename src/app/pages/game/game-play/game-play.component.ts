import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import gsap from "gsap";
import { UtilsService } from "../../../services/utils.service";
import { ApisService } from "../../../services/apis.service";

@Component({
  selector: "app-game-play",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./game-play.component.html",
  styleUrl: "./game-play.component.scss",
})
export class GamePlayComponent implements OnInit {
  audio: HTMLAudioElement = new Audio("../../../../assets/Nhactet.mp3");
  gift: string = "";
  turns: number = 0;
  isVip: boolean = false;
  giftCode: string = "";
  voucherCode: string = "";
  phone: string = "";
  code: string = "";
  constructor(
    private router: Router,
    private utils: UtilsService,
    private apis: ApisService
  ) {}

  ngOnInit(): void {
    const GIFT = sessionStorage.getItem("g") || "";
    const TURNS = sessionStorage.getItem("t") || "";
    const IS_VIP = sessionStorage.getItem("isV") || "";
    const IS_CONSUMER = sessionStorage.getItem("isC") || "";
    const CODE = sessionStorage.getItem("code") || "";
    const PHONE = sessionStorage.getItem("phone") || "";

    if (this.utils.validateString(IS_CONSUMER) == true && GIFT && TURNS) {
      const _GIFT = JSON.parse(GIFT);
      const _TURN = parseInt(TURNS);
      if (
        !this.utils.validateString(PHONE) ||
        !_GIFT[0] ||
        !_TURN ||
        _TURN <= 0
      ) {
        this.router.navigate(["registration"]).then(() => {
          this.utils.clearSessionStorage();
        });
      } else {
        this.turns = _TURN;
        this.gift = _GIFT[0].name;
        this.phone = PHONE;
        this.giftCode = _GIFT[0].code;
        this.voucherCode = _GIFT[0].voucher;
      }
    } else if (this.utils.validateString(IS_VIP) == true && GIFT && TURNS) {
      const _GIFT = JSON.parse(GIFT);
      const _TURN = parseInt(TURNS);
      if (
        !this.utils.validateString(CODE) ||
        !_GIFT[0] ||
        !_TURN ||
        _TURN <= 0
      ) {
        this.router.navigate(["registration"]).then(() => {
          this.utils.clearSessionStorage();
        });
      } else {
        this.turns = _TURN;
        this.gift = _GIFT[0].name;
        this.isVip = true;
        this.code = CODE;
        this.giftCode = _GIFT[0].code;
        this.voucherCode = _GIFT[0].voucher;
      }
    } else {
      this.router.navigate(["registration"]).then(() => {
        this.utils.clearSessionStorage();
      });
    }
  }

  onShake() {
    this.initShake();
    this.initAudio();
  }

  initShake() {
    // init shake for box
    this.startTo(".box-stick--box--img", {
      rotation: 10,
      ease: "sine.easeInOut",
      duration: 0.4,
    });
    this.startTo(".box-stick--box--img", {
      delay: 0.4,
      rotation: "-=20",
      ease: "sine.easeInOut",
      duration: 0.5,
      yoyo: true,
      repeat: 8,
    });
    this.startTo(".box-stick--box--img", {
      rotation: 0,
      ease: "sine.easeInOut",
      duration: 0.4,
      delay: 4.5,
    });
    // init shake for box

    // init shake for stick
    this.startTo(".stick-4", {
      delay: 0.2,
      x: 20,
      y: 30,
      duration: 0.4,
    });
    this.startTo(".stick-3", {
      delay: 0.2,
      x: 30,
      y: 30,
      rotation: 10,
      duration: 0.4,
    });
    this.startTo(".stick-2", {
      delay: 0.2,
      x: 20,
      y: 35,
      rotation: 20,
      duration: 0.4,
    });
    this.startTo(".stick-1", {
      delay: 0.1,
      x: 20,
      y: 40,
      duration: 0.4,
    });
    this.startTo(".stick-1", {
      delay: 0.4,
      x: 50,
      rotation: 10,
      ease: "sine.easeInOut",
      duration: 0.5,
      yoyo: true,
      repeat: 8,
    });
    this.startTo(".stick-2", {
      delay: 0.4,
      x: 50,
      rotation: 30,
      ease: "sine.easeInOut",
      duration: 0.4,
      yoyo: true,
      repeat: 10,
    });
    this.startTo(".stick-3", {
      delay: 0.4,
      x: -50,
      rotation: -30,
      ease: "sine.easeInOut",
      duration: 0.6,
      yoyo: true,
      repeat: 7,
    });
    this.startTo(".stick-4", {
      delay: 0.4,
      x: -80,
      rotation: -10,
      ease: "sine.easeInOut",
      duration: 0.5,
      yoyo: true,
      repeat: 8,
    });
    this.startTo(".stick-1", {
      delay: 4.4,
      x: 0,
      rotation: -22,
      ease: "sine.easeInOut",
      duration: 0.5,
    });
    this.startTo(".stick-2", {
      delay: 4.4,
      x: 0,
      rotation: -5,
      ease: "sine.easeInOut",
      duration: 0.5,
    });
    this.startTo(".stick-3", {
      delay: 4.8,
      x: 0,
      rotation: 6,
      ease: "sine.easeInOut",
      duration: 0.5,
    });
    this.startTo(".stick-4", {
      delay: 4.4,
      x: 0,
      rotation: 20,
      ease: "sine.easeInOut",
      duration: 0.5,
    });
    // init shake for stick

    gsap.delayedCall(5.3, () => {
      this.startTo(".envelop-loc-sac", {
        display: "block",
        y: -200,
        duration: 1,
      });
      this.startTo("#mask-gift", {
        delay: 0.7,
        duration: 1.5,
        zIndex: 7,
        ease: "sine.easeInOut",
      });
      this.startTo(".background-color-mask", {
        delay: 2.2,
        duration: 2.5,
        display: "block",
        ease: "sine.easeInOut",
      });
      this.startTo(".wrap-content--envelop-base", {
        delay: 2.2,
        duration: 2.5,
        zIndex: 7,
        display: "block",
        ease: "sine.easeInOut",
      });
      this.startTo(".mask--header", {
        delay: 2.2,
        zIndex: 7,
        duration: 2.5,
        display: "block",
        ease: "sine.easeInOut",
      });
      this.startTo(".envelop-loc-sac", {
        delay: 1,
        scale: 2.3,
        y: -140,
        duration: 1,
        zIndex: 8,
      });
    });
    gsap.delayedCall(11.2, () => {
      if (this.isVip) {
        this.confirmAward(
          {
            phone: "",
            code: this.code,
            giftCode: [
              {
                code: this.giftCode,
                voucher: this.voucherCode,
              },
            ],
          },
          "confirm"
        );
      } else {
        this.confirmAward(
          {
            phone: this.phone,
            code: "anonymous",
            giftCode: [
              {
                code: this.giftCode,
                voucher: this.voucherCode,
              },
            ],
          },
          "confirm-anonymous"
        );
      }
    });
  }

  confirmAward(data: any, url: string) {
    // this.utils.showLoading();
    // this.apis.confirmAward(data, url).subscribe({
    //   next: (response: any) => {
    //     switch (parseInt(response.status)) {
    //       case 1: // success
    //         const { giftCode } = response;
    //         if (giftCode) {
    //           if (giftCode[0].code && giftCode[0].voucher) {
    //             if (giftCode[0].message == "Valid") {
    //               this.router.navigate(["notification"]).then(() => {
    //                 sessionStorage.setItem("gn", this.gift);
    //                 sessionStorage.setItem("ip", "true");
    //                 this.audio.pause();
    //                 this.utils.hideLoading();
    //               });
    //             } else if (giftCode[0].message == "Confirmed") {
    //               this.utils.hideLoading();
    //               this.utils.setMessage("Bạn đã tham gia trước đó!");
    //               this.utils.showMessage();
    //             } else {
    //               this.utils.hideLoading();
    //               this.utils.setMessage("Tham số không hợp lệ!");
    //               this.utils.showMessage();
    //             }
    //           } else {
    //             this.utils.setMessage("Tham số không hợp lệ!");
    //             this.utils.showMessage();
    //           }
    //         } else {
    //           this.utils.setMessage("Tham số không hợp lệ!");
    //           this.utils.showMessage();
    //         }
    //         break;
    //       case -2: // param invalid or fail
    //       case -3: // code invalid
    //         this.utils.setMessage("Tham số không hợp lệ!");
    //         this.utils.showMessage();
    //         break;
    //       default:
    //         this.utils.setMessage("Hệ thống gặp vấn đề!");
    //         this.utils.showMessage();
    //         break;
    //     }
    //   },
    //   error: (error) => {
    //     this.utils.setMessage("Hệ thống gặp vấn đề!");
    //     this.utils.showMessage();
    //     this.utils.hideLoading();
    //   },
    //   complete: () => {
    //     this.utils.hideLoading();
    //   },
    // });
    this.router.navigate(["notification"]).then(() => {
      sessionStorage.setItem("gn", this.gift);
      sessionStorage.setItem("ip", "true");
      this.audio.pause();
      this.utils.hideLoading();
    });
  }

  initAudio() {
    this.audio.play();
  }

  startTo(target: string, to: any) {
    gsap.to(target, to);
  }
}
