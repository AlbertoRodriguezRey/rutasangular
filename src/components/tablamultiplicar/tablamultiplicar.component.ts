import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent implements OnInit {
  public numero!: number;
  public tabla: number[]; 
  public numeros: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.tabla = [];
  }

  redirect(num: number): void {
    this._router.navigate(['/tablamultiplicar', num]);
  }

  goToHome() {
    this._router.navigate(['/']);
  }

  random(): void {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
    this._router.navigate(['/tablamultiplicar', randomNum]);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._activeRoute.params.subscribe((parametros: Params) => {
      if (parametros['numero'] != null) {
        this.numero = parseInt(parametros['numero']);
        this.tabla = [];
        for (let i = 1; i <= 10; i++) {
          this.tabla.push(this.numero * i);
        }
      }
    })
  }
}
