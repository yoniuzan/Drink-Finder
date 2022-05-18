import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output('close-modal') public _closeModal = new EventEmitter<void>();

  @Input('image-url') _imageUrl: string;

  constructor() { 
    this._closeModal = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  public closeModal(): void {
    this._closeModal.emit();
  }

}
