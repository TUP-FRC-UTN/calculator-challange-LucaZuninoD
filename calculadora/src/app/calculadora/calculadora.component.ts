import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OperacionComponent } from "../operacion/operacion.component";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule, OperacionComponent],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']  // Corregir aquí
})
export class CalculadoraComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number | null = null;

  manejarResultado(resultado: number) {
    this.resultado = resultado;
  }
}
