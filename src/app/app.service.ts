import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}
  getData() {
    let url = "http://wesotect.com:5001/difflog/getAll";
    return this.http.get<any>(url);
  }

  searchData() {
    let url = "http://wesotect.com:5001/difflog/search";
    let body = {
      keyword: "BTC_ETH",
      tag: ["changePair"],
      startdate: "01-01-2021 00:00",
      enddate: "01-03-2021 23:59"
    };
    return this.http.post<any>(url, body);
  }
}
