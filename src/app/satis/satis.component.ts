import { Component, OnInit } from '@angular/core';
declare interface islemModel{
  islemAdi:string
  islemIcon:string
  islemUrl:string
}
export const islem:islemModel[]=[
  {islemAdi:"Satış Yap",islemIcon:"https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png",islemUrl:"#/islemler/satis/satisyap"},
  {islemAdi:"Satış Listesi",islemIcon:"https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/task_report_list-512.png",islemUrl:"#/islemler/satis/satislistele"}
]
@Component({
  selector: 'app-satis',
  templateUrl: './satis.component.html',
  styleUrls: ['./satis.component.css']
})
export class SatisComponent implements OnInit {
  islemMenu:any[]
  constructor() { }

  ngOnInit(): void {
    this.islemMenu = islem.filter(menuItem => menuItem)
  }


}
