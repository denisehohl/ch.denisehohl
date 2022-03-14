import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { PageComponent } from './core/page/page.component';
import { KleintierpraxisComponent } from './pages/projects/kleintierpraxis/kleintierpraxis.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GluecksschmidComponent } from './pages/projects/gluecksschmid/gluecksschmid.component';
import { WindwerkComponent } from './projects/windwerk/windwerk.component';
import { WindwerkBeiWeihnachtenComponent } from './projects/windwerk-bei-weihnachten/windwerk-bei-weihnachten.component';
import { DialogicComponent } from './projects/dialogic/dialogic.component';
import { SpitzentraumComponent } from './projects/spitzentraum/spitzentraum.component';
import { InuComponent } from './projects/inu/inu.component';
import { TierwohlComponent } from './projects/tierwohl/tierwohl.component';
import { ForMyHorseComponent } from './projects/for-my-horse/for-my-horse.component';
import { ZambailComponent } from './projects/zambail/zambail.component';
import { CtcConsultingComponent } from './projects/ctc-consulting/ctc-consulting.component';
import { AkariComponent } from './projects/akari/akari.component';
import { CattailsTwoComponent } from './projects/cattails-two/cattails-two.component';
import { TheWanderingVillageComponent } from './projects/the-wandering-village/the-wandering-village.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageComponent,
    KleintierpraxisComponent,
    AboutComponent,
    ProjectsComponent,
    GluecksschmidComponent,
    WindwerkComponent,
    WindwerkBeiWeihnachtenComponent,
    DialogicComponent,
    SpitzentraumComponent,
    InuComponent,
    TierwohlComponent,
    ForMyHorseComponent,
    ZambailComponent,
    CtcConsultingComponent,
    AkariComponent,
    CattailsTwoComponent,
    TheWanderingVillageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
