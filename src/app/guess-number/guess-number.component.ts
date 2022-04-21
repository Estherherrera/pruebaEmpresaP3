import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalGuessedNumberComponent } from '../modal-guessed-number/modal-guessed-number.component';

@Component({
  selector: 'app-guess-number',
  templateUrl: './guess-number.component.html',
  styleUrls: ['./guess-number.component.css']
})

export class GuessNumberComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!:NgForm;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  
  validacion(): boolean{
   if(!this.miFormulario?.control.get('numero')) return false;

   return this.miFormulario?.control.get('numero').invalid
         && this.miFormulario.control.get('numero').touched
  }

  adivinarNumero(){

    let { numero } = this.miFormulario?.controls
    
    let numeroAdivinado = numero.value + 0;
    const modalRef = this.modalService.open(ModalGuessedNumberComponent);
    modalRef.componentInstance.numeroAdivinado = numeroAdivinado;
  }

}
