import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operacion',
  standalone: true,
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']  // Corregir aquí
})
export class OperacionComponent {
  @Input() valor1!: number;
  @Input() valor2!: number;
  @Output() resultado = new EventEmitter<number>();

  sumar() {
    this.resultado.emit(this.valor1 + this.valor2);
  }

  restar() {
    this.resultado.emit(this.valor1 - this.valor2);
  }

  multiplicar() {
    this.resultado.emit(this.valor1 * this.valor2);
  }

  dividir() {
    if (this.valor2 !== 0) {
      this.resultado.emit(this.valor1 / this.valor2);
    } else {
      alert('No se puede dividir por 0');
    }
  }

  potencia() {
    this.resultado.emit(Math.pow(this.valor1, this.valor2));
  }

  raiz() {
    this.resultado.emit(Math.sqrt(this.valor1));
  }

  limpiar() {
    this.resultado.emit(0);
  }
}
