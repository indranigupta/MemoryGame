import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  cards = [
    { id: 1, image: 'assets/doraemon.png', flipped: false, matched: false },
    { id: 2, image: 'assets/doraemon.png', flipped: false, matched: false },
    { id: 3, image: 'assets/dorami.png', flipped: false, matched: false },
    { id: 4, image: 'assets/dorami.png', flipped: false, matched: false },
    { id: 5, image: 'assets/gian.png', flipped: false, matched: false },
    { id: 6, image: 'assets/gian.png', flipped: false, matched: false },
    { id: 7, image: 'assets/nobita.jpg', flipped: false, matched: false },
    { id: 8, image: 'assets/nobita.jpg', flipped: false, matched: false },
    { id: 9, image: 'assets/shizuka.jpg', flipped: false, matched: false },
    { id: 10, image: 'assets/shizuka.jpg', flipped: false, matched: false },
    { id: 11, image: 'assets/sunio.jpg', flipped: false, matched: false },
    { id: 12, image: 'assets/sunio.jpg', flipped: false, matched: false },
   
  ];

  flippedCards: any[] = [];
  gameComplete: boolean = false;
  score: number = 0;
  moves: number = 0;
  misses: number = 0;
  accuracy: number = 0;
  ngOnInit() {
    this.cards = this.shuffleCards([...this.cards]); // shuffle the cards initially
  }
  
  shuffleCards(cards: any[]): any[] {
    return cards.sort(() => Math.random() - 0.5);
  }

  handleCardClick(card: any) {
    this.moves++;
  
    if (!card.flipped && !card.matched && this.flippedCards.length < 2) {
      card.flipped = true;
  
      this.flippedCards.push(card);
  
      if (this.flippedCards.length === 2) {
        // Check for a match
        if (this.flippedCards[0].image === this.flippedCards[1].image) {
          this.flippedCards.forEach((flippedCard) => (flippedCard.matched = true));
          this.score += 10;
  
          // Remove matched cards from the array
          this.removeMatchedCards();
  
          if (this.cards.length === 0) {
            this.gameComplete = true;
          }
        } else {
          this.misses++;
          // this.score -= 5;
        }
  
        // Flip the cards back after a short delay
        setTimeout(() => {
          this.flippedCards.forEach((flippedCard) => (flippedCard.flipped = false));
          this.flippedCards = [];
        }, 1000);
      }
    }
  
    // accuracy
    this.accuracy = ((this.moves - this.misses) / this.moves) * 100;
  }
  
  removeMatchedCards() {
    // Remove matched cards from the array
    for (let i = this.cards.length - 1; i >= 0; i--) {
      if (this.cards[i].matched) {
        this.cards.splice(i, 1);
      }
    }
  }
}

