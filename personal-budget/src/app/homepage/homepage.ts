import { Component } from '@angular/core';
import { Article } from '../article/article';

@Component({
  selector: 'pb-homepage',
  imports: [Article],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
