import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsService } from './services/product-details.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, NgFor } from '@angular/common';
import { BackgroundColorDirective } from './directives/background-color.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    MatTableModule,
    CommonModule,
    NgFor,
  ],
  // declarations: [BackgroundColorDirective],
  providers: [ProductDetailsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather';
  public productResponse: any;
  productData = false;
  background = 'red';
  constructor(public productService: ProductDetailsService) {}
  ngOnInit(): void {
    this.productService.getProductsdata().subscribe((data) => {
      this.productResponse = data;
      console.log(this.productResponse);
    });
  }
  getData() {
    this.productData = !this.productData;
  }
}
