import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-enfermeros',
  templateUrl: './listado-enfermeros.component.html',
  styleUrl: './listado-enfermeros.component.css'
})
export class ListadoEnfermerosComponent {
  enfermeros = [
    { nombre: 'Ana Martínez', especialidad: 'Pediatría', turno: 'Mañana', telefono: '555-123-456' },
    { nombre: 'Carlos López', especialidad: 'Urgencias', turno: 'Tarde', telefono: '555-234-567' },
    { nombre: 'Lucía Fernández', especialidad: 'Geriatría', turno: 'Noche', telefono: '555-345-678' },
    { nombre: 'Juan Pérez', especialidad: 'Cirugía', turno: 'Mañana', telefono: '555-456-789' },
    { nombre: 'María Torres', especialidad: 'Cardiología', turno: 'Tarde', telefono: '555-567-890' },
  ];
}
