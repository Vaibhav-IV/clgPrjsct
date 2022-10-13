import { Component, OnInit } from '@angular/core';
import productsdata from '../../assets/db.json'

interface PRODUCT {
  id: Number;
  title: String;
  author: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  products: PRODUCT[] = productsdata.products

  constructor() { 

  }
  ngOnInit(): void {
    console.log(productsdata.products)
  }

}
