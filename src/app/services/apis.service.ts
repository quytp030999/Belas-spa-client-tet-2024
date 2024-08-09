import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApisService {
  private API_URL = "https://belas-spa.vmarketing.vn/api";
  constructor(private http: HttpClient) {}

  getAwardVip(code: string) {
    return this.http.post(`${this.API_URL}/get-award`, { code, totalTurn: 1 });
  }

  getAwardAnonymous(phone: string, name: string) {
    return this.http.post(`${this.API_URL}/get-award-anonymous`, {
      name: name,
      phone: phone,
    });
  }

  confirmAward(data: any, url: string) {
    return this.http.post(`${this.API_URL}/${url}`, data);
  }
}
