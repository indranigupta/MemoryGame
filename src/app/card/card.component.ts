import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardValue: any;
  @Input() flipped: boolean = false;
  @Input() matched: boolean = false;
  @Output() cardClicked :EventEmitter<void>= new EventEmitter<void>();

  isObject(): boolean {
    return typeof this.cardValue === 'object' ;
  }

  // handleClick() {
  //   if (!this.flipped && !this.matched) {
  //     this.cardClicked.emit();
  //   }
  // }

  handleCardClick() {
    if (!this.flipped) {
      this.flipped = true;
      this.cardClicked.emit();
    }
  }
}
