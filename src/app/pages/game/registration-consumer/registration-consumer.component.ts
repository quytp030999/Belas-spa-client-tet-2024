import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UtilsService } from "../../../services/utils.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ApisService } from "../../../services/apis.service";

@Component({
  selector: "app-registration-consumer",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./registration-consumer.component.html",
  styleUrl: "./registration-consumer.component.scss",
})
export class RegistrationConsumerComponent {
  phone: string = "";
  name: string = "";

  constructor(
    private router: Router,
    private utils: UtilsService,
    private apis: ApisService
  ) {}

  playGame() {
    this.utils.showLoading();
    if (this.utils.validationForm(this.name, this.phone) == true) {
      const phoneCheck = this.utils.validatePhone(this.phone);
      if (phoneCheck.status === 0) {
        this.onCheckPhoneJoined(phoneCheck.phone);
      } else {
        this.utils.hideLoading();
        this.utils.showMessage();
        this.utils.setMessage("Số điện thoại không hợp lệ!");
      }
    } else {
      this.utils.hideLoading();
      this.utils.showMessage();
      this.utils.setMessage("Vui lòng nhập đầy đủ thông tin!");
    }
  }

  phoneChange(event: any) {
    if (this.phone.length <= 11) {
      this.phone = this.utils.keyupPhoneChange(event);
    } else {
      this.phone = this.phone.slice(0, 11);
    }
  }

  onCheckPhoneJoined(phone: string) {
    // this.apis.getAwardAnonymous(phone, this.name).subscribe({
    //   next: (response: any) => {
    //     switch (parseInt(response.status)) {
    //       case 1:
    this.router.navigate(["/game-play"]).then(() => {
      //           const { giftCode, totalTurn } = response;
      sessionStorage.setItem("phone", phone);
      // sessionStorage.setItem("g", JSON.stringify(giftCode));
      sessionStorage.setItem(
        "g",
        JSON.stringify([
          {
            name: "RF My Clear: 2.600.000 trị giá 286k",
            code: "rfmyclear3",
            voucher: "RF My Clear: 2.600.000 trị giá 286k",
          },
        ])
      );
      // sessionStorage.setItem("t", totalTurn);
      sessionStorage.setItem("t", "1");
      sessionStorage.setItem("isC", "true");
      this.utils.hideLoading();
    });
    //         break;
    //       case -2:
    //         this.utils.showMessage();
    //         this.utils.setMessage("Số điện thoại không hợp lệ!");
    //         break;
    //       case -3:
    //         this.utils.showMessage();
    //         this.utils.setMessage("Số điện thoại đã tham gia chương trình!");
    //         break;
    //       case -4:
    //         this.utils.showMessage();
    //         this.utils.setMessage("Số điện thoại không khớp với chương trình!");
    //         break;
    //       case -5:
    //         this.utils.showMessage();
    //         this.utils.setMessage(
    //           "Số điện thoại đã hoàn thành chương trình trước đó!"
    //         );
    //         break;
    //       default:
    //         this.utils.showMessage();
    //         this.utils.setMessage("Hệ thống gặp vấn đề!");
    //         break;
    //     }
    //   },
    //   error: (error) => {
    //     this.utils.showMessage();
    //     this.utils.setMessage("Hệ thống gặp vấn đề!");
    //     this.utils.hideLoading();
    //   },
    //   complete: () => {
    //     this.utils.hideLoading();
    //   },
    // });
  }
}
