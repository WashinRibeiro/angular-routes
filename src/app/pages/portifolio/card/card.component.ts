import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navigate: Router
    ) {

    // http://localhost:4200/portfolio/1
    this.activeRoute.params.subscribe((res: any) => {
      console.log('params:', res);
    })

    // Pegando o parametro das rotas filhas
    this.activeRoute.firstChild?.params.subscribe((res: any) => {
      console.log('params filhos:', res);
    })

    // http://localhost:4200/portfolio/1/?name=felipe&token=123
    this.activeRoute.queryParams.subscribe((res: any) => {
      console.log('queryParams:', res);
    })
  }

  ngOnInit(): void {
    setInterval(() => {
      this.navigate.navigate(['/']);
    }, 5000)
  }

}
