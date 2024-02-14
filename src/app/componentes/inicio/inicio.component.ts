import { Component, OnInit } from '@angular/core';
import { Estudiantes } from 'src/app/modelos/estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  listEstudiantes: Estudiantes [] = []

  constructor(private estudianteService: EstudiantesService) { 
    // this.listEstudiantes.push(
    //   {
    //   id: 123456,
    //   nombre: 'Noah',
    //   calificacion: 4.5
    //   },
    //   {
    //     id: 67894,
    //     nombre: 'Jeremi',
    //     calificacion: 3.5
    //   }      
    // )
  }


  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe( data => {
      this.listEstudiantes.push(data);
    }, error => {
      console.log('Se presento un error en el consumo de la api: '+ error )
    })
  }

}
