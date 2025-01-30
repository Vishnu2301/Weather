import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsService } from './services/product-details.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [ProductDetailsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather';
  public productResponse: any;
  constructor(public productService: ProductDetailsService) {}
  ngOnInit(): void {
    this.productService.getProductsdata().subscribe((data) => {
      this.productResponse = data;
      console.log(this.productResponse);
    });
  }
}
