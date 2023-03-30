import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { SatisComponent } from '../../satis/satis.component';
import { CustomerComponent } from '../../customer/customer.component';
import { GlassComponent } from '../../glass/glass.component';
import { FrameComponent } from '../../frame/frame.component';
import { CustomerlistComponent } from '../../customer/customerlist/customerlist.component';
import { CustomeraddComponent } from '../../customer/customeradd/customeradd.component';
import { CustomerupdateComponent } from '../../customer/customerupdate/customerupdate.component';
import { SatisyapComponent } from '../../satis/satisyap/satisyap.component';
import { SatislisteleComponent } from '../../satis/satislistele/satislistele.component';
import { CammarkalistComponent } from '../../glass/cammarkalist/cammarkalist.component';
import { GlassbrandaddComponent } from '../../glass/glassbrandadd/glassbrandadd.component';
import { GlasscategoryaddComponent } from '../../glass/glasscategoryadd/glasscategoryadd.component';
import { GlasscategorylistComponent } from '../../glass/glasscategorylist/glasscategorylist.component';
import { FrameaddComponent } from '../../frame/frameadd/frameadd.component';
import { FramebrandlistComponent } from '../../frame/framebrandlist/framebrandlist.component';
import { FaturaComponent } from '../../fatura/fatura.component';
import { FaturaaddComponent } from '../../fatura/faturaadd/faturaadd.component';
import { FaturalistComponent } from '../../fatura/faturalist/faturalist.component';
import { CustomergetComponent } from '../../customer/customerget/customerget.component';
import { AuthInterceptor } from '../../interceptors/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { IdentityPipePipe } from '../../pipes/identity-pipe.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { CustomerAddDialogComponent } from '../../satis/satisyap/customer-add-dialog/customer-add-dialog.component';
import { YakinidentityPipePipe } from '../../pipes/yakinidentity-pipe.pipe';
import { SatisdetailComponent } from '../../satis/satisdetail/satisdetail.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    MatDialogModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    SatisComponent,
    CustomerComponent,
    GlassComponent,
    FrameComponent,
    CustomerlistComponent,
    CustomeraddComponent,
    CustomerupdateComponent,
    SatisyapComponent,
    SatislisteleComponent,
    CammarkalistComponent,
    GlassbrandaddComponent,
    GlasscategoryaddComponent,
    GlasscategorylistComponent,
    FrameaddComponent,
    FramebrandlistComponent,
    FaturaComponent,
    FaturaaddComponent,
    FaturalistComponent,
    CustomergetComponent,
    FilterPipePipe,
    IdentityPipePipe,
    CustomerAddDialogComponent,
    YakinidentityPipePipe,
    SatisdetailComponent
    
    
  ],
  entryComponents: [CustomerAddDialogComponent, CustomerAddDialogComponent],
  
  providers:[
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ]
})

export class AdminLayoutModule {}
