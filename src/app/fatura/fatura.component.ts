import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

declare interface islemModel{
  islemAdi:string
  islemIcon:string
  islemUrl:string
}
export const islem:islemModel[]=[
  {islemAdi:"Veresiye Ekle",islemIcon:"https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png",islemUrl:"islemler/veresiye/ekle"},
  {islemAdi:"Fatura Güncelle",islemIcon:"https://cdn1.iconfinder.com/data/icons/material-set-5/48/464-512.png",islemUrl:"islemler/veresiye/guncelle"},
  {islemAdi:"Veresiye Listesi",islemIcon:"https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/task_report_list-512.png",islemUrl:"islemler/veresiye/listele"},
  
]

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.component.html',
  styleUrls: ['./fatura.component.css']
})
export class FaturaComponent implements OnInit {

  islemMenu:any[]
  message:string = "Veresiye defteri otomasyonu şuan kullanılamamaktadır. Bir Sonraki Güncellemede Kullanıma Açılacaktır!!"
  constructor(
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.islemMenu = islem.filter(islemMenu => islemMenu)
    this.toastrService.info(this.message,"UYARI !!")
  }

}
