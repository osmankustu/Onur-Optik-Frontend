import { Component, OnInit } from '@angular/core';

declare interface islemModel{
  islemAdi:string
  islemIcon:string
  islemUrl:string
}
export const islem:islemModel[]=[
  {islemAdi:"Cam Markası Ekle",islemIcon:"https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png",islemUrl:"#/islemler/cam/markaekle"},
  {islemAdi:"Cam Markası Listesi",islemIcon:"https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/task_report_list-512.png",islemUrl:"#/islemler/cam/markalistele"},
  {islemAdi:"Cam Kategori Ekle",islemIcon:"https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png",islemUrl:"#/islemler/cam/kategoriekle"},
  {islemAdi:"Cam Kategori Listesi",islemIcon:"https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/task_report_list-512.png",islemUrl:"#/islemler/cam/kategorilistele"}
]
@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit {
  islemMenu:any[]
  constructor() { }

  ngOnInit(): void {
    this.islemMenu = islem.filter(islemMenu => islemMenu)
  }

}
