import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  lugares: any = [];

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.getClients().subscribe(
      (data:any) => {
        this.lugares = data;
        console.log(this.lugares);
      }
    )
  }

  getClients() {
    return this.http.get("assets/archivos/lugare.json").pipe(
      map((data:any) => {
        return data.data;
      })
    )
  }

}
