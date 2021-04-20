import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColegioService } from '../../../app_core/services/colegio-service/colegio.service';


/**
 * Componente para el modulo de activar libretas.
 */
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html'
})
export class Estudiantes implements OnInit {

  /**
   * Variable que contiene el formulario de las casas
   */
  formProfesor: FormGroup
  /**
   * Variable donde se alamacena los cursos de un profesor
   */
  estudiantes: any;

  constructor(
    private fb: FormBuilder,
    private serviceColegio: ColegioService,
  ) {
    this.formProfesor = this.fb.group({
      profesor: ""
    })
  }

  /**
   * Función que permite iniciar y cargar las casas
   */
  async ngOnInit() {
    this.estudiantes = await this.serviceColegio.getEstdudiantes().toPromise();
    console.log("profesores**", this.estudiantes)
  }
  

}
