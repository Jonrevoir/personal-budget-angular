import { Component } from '@angular/core';
import { Article } from '../article/article';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';

@Component({
  selector: 'pb-homepage',
  imports: [Article, Breadcrumbs],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
