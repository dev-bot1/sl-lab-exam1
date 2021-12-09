import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public datas;

  // {
  //     name: "Swagat Panda",
  //     date: "10/12/2020",
  //     amount: "2"
  //   },
  //   {
  //     name: "Harshil Sah",
  //     date: "10/12/2020",
  //     amount: "3"
  //   },
  //   {
  //     name: "Shubham Kumar",
  //     date: "10/12/2020",
  //     amount: "1.5"
  //   }  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obs = this.http.get('http://localhost:3000/water');
    obs.subscribe((response) => {
      console.log(response);
      this.datas = response;
    });
  }

}
