import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TeamsComponent } from './teams/teams.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LevelComponent } from './components/level/level.component';

@NgModule({
  declarations: [AdminComponent, TeamsComponent, LevelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DragDropModule

  ]
})
export class AdminModule { }
