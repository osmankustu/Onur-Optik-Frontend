import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CustomerComponent } from '../../customer/customer.component';
import { GlassComponent } from '../../glass/glass.component';
import { FrameComponent } from '../../frame/frame.component';
import { CustomerlistComponent } from '../../customer/customerlist/customerlist.component';
import { CustomeraddComponent } from '../../customer/customeradd/customeradd.component';
import { CustomerupdateComponent } from '../../customer/customerupdate/customerupdate.component';
import { SatisComponent } from '../../satis/satis.component';
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

import { LoginGuard } from '../../Guards/login.guard';
import { CustomergetComponent } from '../../customer/customerget/customerget.component';
import { SatisdetailComponent } from '../../satis/satisdetail/satisdetail.component';
import { SatisUpdateComponent } from '../../satis/satis-update/satis-update.component';
import { GlassCategoryUpdateComponent } from '../../glass/glass-category-update/glass-category-update.component';
import { GlassBrandsUpdateComponent } from '../../glass/glass-brands-update/glass-brands-update.component';
import { FrameUpdateComponent } from '../../frame/frame-update/frame-update.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    //İŞLEMLER ROUTİNG
    { path: 'islemler',component: IconsComponent},
    //MUSTERİ ROUTİNG
    {path: 'islemler/musteri' , component:CustomerComponent},
    {path: 'islemler/musteri/listele', component:CustomerlistComponent},
    {path: 'islemler/musteri/ekle' , component:CustomeraddComponent},
    {path: 'islemler/musteri/listele/detail/:musteriId/guncelle', component:CustomerupdateComponent},
    {path: 'islemler/musteri/listele/detail/:musteriId' , component:CustomergetComponent},
    //CAM ROUTİNG
    {path: 'islemler/cam' , component:GlassComponent},
    {path: 'islemler/cam/markalistele', component:CammarkalistComponent},
    {path: 'islemler/cam/markaekle', component:GlassbrandaddComponent},
    {path: 'islemler/cam/markalistele/markaguncelle/:brandId', component:GlassBrandsUpdateComponent},
    {path: 'islemler/cam/kategoriekle',component:GlasscategoryaddComponent},
    {path: 'islemler/cam/kategorilistele', component:GlasscategorylistComponent},
    {path: 'islemler/cam/kategorilistele/kategoriguncelle/:categoryId', component:GlassCategoryUpdateComponent},
    //CERCEVE ROUTİNG
    {path: 'islemler/cerceve', component:FrameComponent},
    {path: 'islemler/cerceve/ekle',component:FrameaddComponent},
    {path: 'islemler/cerceve/listele' , component:FramebrandlistComponent},
    {path: 'islemler/cerceve/listele/guncelle/:brandId', component:FrameUpdateComponent},
    //SATİS ROUTİNG
    {path: 'islemler/satis' , component:SatisComponent},
    {path: 'islemler/satis/satisyap', component:SatisyapComponent},
    {path: 'islemler/satis/satislistele', component:SatislisteleComponent},
    {path: 'islemler/satis/satislistele/detail/:glassesId', component:SatisdetailComponent},
    {path: 'islemler/satis/satisguncelle/:glassesId',component:SatisUpdateComponent},
    //FATURA ROUTİNG
    {path: 'islemler/veresiye',component:FaturaComponent},
    {path: 'islemler/veresiye/ekle' , component:FaturaaddComponent},
    {path: 'islemler/veresiye/listele', component:FaturalistComponent},

    
   
    
];
