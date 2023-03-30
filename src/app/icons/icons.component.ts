import { Component, OnInit } from '@angular/core';

declare interface islemModel{
  islemAdi:string
  islemIcon:string
  islemUrl:string
}
export const Islem: islemModel[]=[
  {islemAdi:"Müşteri İşlemleri",islemIcon:"https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png",islemUrl:"#/islemler/musteri"},
  {islemAdi:"Cam İşlemleri",islemIcon:"https://cdn3.iconfinder.com/data/icons/interior-homedecor-vol-4-outline/512/glass_transparent_transparency_glasses-512.png",islemUrl:"#/islemler/cam"},
  {islemAdi:"Çerçeve İşlemleri",islemIcon:"https://cdn2.iconfinder.com/data/icons/80-s-stuffs-outline/79/Asset_13-512.png",islemUrl:"#islemler/cerceve"},
  {islemAdi:"Veresiye Defteri",islemIcon:"https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/task_report_list-512.png",islemUrl:"#/islemler/veresiye"},
  {islemAdi:"Gözlük İşlemleri",islemIcon:"https://cdn3.iconfinder.com/data/icons/education-vol-1-34/512/4_Education_glasses_reading-512.png",islemUrl:""},
  {islemAdi:"Satış İşlemleri",islemIcon:"https://cdn1.iconfinder.com/data/icons/line-free/24/Shopping_bag-512.png",islemUrl:"#/islemler/satis"},
  
]
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }

  islemMenu: any[];
  
  ngOnInit() {

    this.islemMenu = Islem.filter(menuitem => menuitem)
  }

}
