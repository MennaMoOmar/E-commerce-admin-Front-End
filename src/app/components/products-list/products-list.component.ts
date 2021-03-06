import { ProductService } from './../../services/product.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  
  isChecked:boolean=false;
  searchigValue:string="";
  panelOpenState = false;
  productCount:number;
  noOfPages:number;
 arrnoOfPages:number[]=[];
  allData = this.productService.getAllProducts();
  obj = this.productService.getAllProducts();
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  slider(event){
    console.log(event.value)
    this.obj = this.allData.filter((product)=>{
      return Number(product.current_price) <= Number(event.value)
    })
  }
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productCount= (<[]>this.productService.getAllProducts()).length;
  this.noOfPages=Math.ceil(this.productCount/5);
    for(let i=1;i<=this.noOfPages;i++){
      this.arrnoOfPages.push(i);
    }

    this.paginate(1);

  }

  searchForName(){
    this.obj = this.allData.filter((product)=>{
      return product.product_name.includes(this.searchigValue);
    })
  }  
  paginate(val){
     
    this.obj = this.allData.filter((product,i)=>{
      if(i>=((val*5)-5) && i<(val*5))
      return product
    })

    // if(val==1){
    //   this.obj = this.allData.filter((product,i)=>{
    //     if(i<5)
    //     return product
    //   })
    // }else if(val==2){
    //   this.obj = this.allData.filter((product,i)=>{
    //     if(i>=5 && i<10)
    //     return product
    //   })
    // }else if(val==3){
    //   this.obj = this.allData.filter((product,i)=>{
    //     if(i>=10 && i<15)
    //     return product
    //   })
    // }
    
  }


  changeSale(){
    if(this.isChecked==true){
      this.obj = this.allData.filter((product)=>{
        return product.status=="Sale";
      })
    }else{
      this.obj = this.allData.filter((product)=>{
        return product;
      })
    }
  }

}
