import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';
// Import the required language
// see https://codemirror.net/mode/index.html
import 'codemirror/mode/javascript/javascript';

import { AppRoutingModule } from '../app-routing.module';

import { ServersComponent } from './servers/servers.component';
import { DatabasesComponent } from './databases/databases.component';
import { CollectionsComponent } from './collections/collections.component';
import { ExploreComponent } from './explore/explore.component';

import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { FiltersModule } from '../filters/filters.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CodemirrorModule,
    AppRoutingModule,
    ComponentsModule,
    ServicesModule,
    FiltersModule
  ],
  declarations: [
    ServersComponent,
    DatabasesComponent,
    CollectionsComponent,
    ExploreComponent
  ],
  providers: [ ServicesModule ]
})
export class PagesModule { }