import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import BornToday from '../models/DTOs/bornToday';
import prescriptNotficationDto from '../models/DTOs/prescriptNotficationDto';
import { CustomerService } from '../services/customer.service';
import { SatisService } from '../services/satis.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  prescripts:prescriptNotficationDto[]=[]
  borns:BornToday[]=[]
  constructor(
    private toastr: ToastrService,
    private glassesService:SatisService,
    private customerService:CustomerService
    ) {}

    getPrescripts(){
      this.glassesService.getPrescriptNotfication().subscribe(response=>{
        this.prescripts = response.data
        

        this.toastr.success("Reçete Bildirimleri Listelendi","BAŞARILI!")
      })
    }

    getBornToday(){
      this.customerService.getBornToday().subscribe(response => {
        this.borns = response.data

        if(this.borns!){
          this.toastr.success("Doğum Günleri Listelendi","BAŞARILI!")
        }
        else{
          this.toastr.info("Müşteriler Arasında Doğun Günü Bugün olan bulunamadı !")
        }

      })
    }

  showNotification(from, align){

      const color = Math.floor((Math.random() * 5) + 1);

      switch(color){
        case 1:
        this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-info alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 2:
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-success alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 3:
        this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-warning alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 4:
        this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           enableHtml: true,
           closeButton: true,
           toastClass: "alert alert-danger alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
         break;
         case 5:
         this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: 'toast-' + from + '-' +  align
          });
        break;
        default:
        break;
      }
  }
  ngOnInit() {
    this.getPrescripts();
    this.getBornToday();
  }

}
