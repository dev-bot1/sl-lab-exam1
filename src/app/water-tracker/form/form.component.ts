import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}
    onClickSubmit(data) {
    console.log(data);
    const myData = {
      name: data.name,
      date: data.date,
      amount: data.amount
    };
    this.http
      .post<any>('http://localhost:3000/water', myData)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
