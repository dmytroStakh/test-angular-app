import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css']
})
export class StarsRatingComponent implements OnChanges 
{
  @Input() rating: number = 4;
  @Output() ratingClicked: EventEmitter<string> = 
    new EventEmitter<string>();
  cropWidht: number = 75;

  ngOnChanges(): void {
    this.cropWidht = this.rating * 75/5;
  }

  onClick():void
  {
    console.log(`The rating ${this.rating} was clicked!`);
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
