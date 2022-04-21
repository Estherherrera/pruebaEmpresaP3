import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-guessed-number',
  templateUrl: './modal-guessed-number.component.html',
  styleUrls: ['./modal-guessed-number.component.css']
})
export class ModalGuessedNumberComponent implements OnInit {
  @Input() numeroAdivinado!:number;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
