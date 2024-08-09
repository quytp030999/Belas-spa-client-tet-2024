import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  private isLoading = false;
  isMessage: boolean = false;
  message: string = "";

  constructor() {}

  showLoading() {
    this.isLoading = true;
  }

  hideLoading() {
    this.isLoading = false;
  }

  isLoadingVisible(): boolean {
    return this.isLoading;
  }

  keyupPhoneChange(event: any) {
    return event.target.value.replace(/[^0-9]/g, "");
  }

  validationForm(name: string, phone: string) {
    if (!name || !phone) {
      return false;
    }
    return true;
  }

  showMessage() {
    this.isMessage = true;
  }

  hideMessage() {
    this.isMessage = false;
  }

  isMessageVisible(): boolean {
    return this.isMessage;
  }

  setMessage(msg: string) {
    this.message = msg;
  }

  getMessage() {
    return this.message;
  }

  validatePhone(phone: string) {
    // check Phone
    var phoneCheck = this.checkPhone(phone);
    if (this.validateString(phoneCheck) == true) {
      var phoneCheckSMSC = this.getSMSC(phoneCheck.slice(0, 4));
      switch (phoneCheckSMSC) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return {
            status: 0,
            phone: phoneCheck,
          };
        default:
          return {
            status: -2,
            phone: "",
          };
      }
    } else {
      return {
        status: -2,
        phone: "",
      };
    }
  }

  checkPhone(phone: string) {
    if (phone.length == 10) {
      var firstNumber = phone.slice(0, 1);
      if (firstNumber == "0") {
        var phoneFn = "84" + phone.slice(1, phone.length);
        return phoneFn;
      } else {
        return "";
      }
    } else if (phone.length == 11) {
      var firstNumber = phone.slice(0, 2);
      if (firstNumber == "84") {
        return phone;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }

  getSMSC(headPhone: string) {
    var smsc: number = -1; // 0 : mobie ,1: vina, 2: vietel, 3: vnmobile, 4: gtel, 5: ITelecom
    switch (headPhone) {
      //viettel
      case "8486":
      case "8496":
      case "8497":
      case "8498":
      case "8432":
      case "8433":
      case "8434":
      case "8435":
      case "8436":
      case "8437":
      case "8438":
      case "8439":
        smsc = 2;
        break;
      //vina
      case "8488":
      case "8491":
      case "8494":
      case "8481":
      case "8482":
      case "8483":
      case "8484":
      case "8485":
        smsc = 1;
        break;
      //mobi
      case "8470":
      case "8476":
      case "8477":
      case "8478":
      case "8479":
      case "8489":
      case "8490":
      case "8493":
        smsc = 0;
        break;
      //vnmobile
      case "8456":
      case "8458":
      case "8492":
      case "8452":
        smsc = 3;
        break;
      //gtel
      case "8459":
      case "8499":
        smsc = 4;
        break;
      case "8487":
        smsc = 5;
        break;
      default:
        break;
    }
    return smsc;
  }

  validateString(str: string) {
    if (!str || str == null || str == undefined || str == "") {
      return false;
    }
    return true;
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }
}
