import { Component, Input } from '@angular/core';

@Component({
  selector: 'pb-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article {
  @Input() title: string = 'Title';
  @Input() content: string = 'Content';
}
