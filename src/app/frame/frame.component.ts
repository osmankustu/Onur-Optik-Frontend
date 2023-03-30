import { Component, OnInit } from '@angular/core';

declare interface islemModel{
  islemAdi:string
  islemIcon:string
  islemUrl:string
}
export const islem:islemModel[]=[
  {islemAdi:"Çerçeve Markası Ekle",islemIcon:"https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png",islemUrl:"#/islemler/cerceve/ekle"},
  {islemAdi:"Çerçeve Markası Listesi",islemIcon:"https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/task_report_list-512.png",islemUrl:"#/islemler/cerceve/listele"},
  
]
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  islemMenu:any[]
  constructor() { }

  ngOnInit(): void {
    this.islemMenu = islem.filter(islemMenu => islemMenu)
  }

}
