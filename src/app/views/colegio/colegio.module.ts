import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewsRoutes } from './colegio.routing';
import { Profesores } from './profesores/profesores.component';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { ModalModule} from 'ngx-bootstrap/modal';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TablaInfo } from './tabla-info/tabla-info.component';
import { Cursos } from './cursos/cursos.component';
import { Asignaturas } from './asignaturas/asignaturas.component';
import { Estudiantes } from './estudiantes/estudiantes.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ViewsRoutes),
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    TableModule,
    AutoCompleteModule,
    MatSelectModule,
    ModalModule.forRoot(),
    TooltipModule,
    MatInputModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    Profesores,
    TablaInfo,
    Cursos,
    Asignaturas,
    Estudiantes
  ],
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
  ],
})
export class ColegioModule { }
