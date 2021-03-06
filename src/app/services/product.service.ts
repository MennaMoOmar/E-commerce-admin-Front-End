import { Product } from '../../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ProductService{
    
    products:Product[]=[];
    constructor(private http:HttpClient) {
      this.products = [
        { _id:"123",
          product_name : "product 1", 
          status:"Sale",
          current_price:"100", 
          old_price:"5", 
          rating:"2", 
          isFavorite:true,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 2", 
          status:"",
          current_price:"50", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 3", 
          status:"Sale",
          current_price:"75", 
          old_price:"5", 
          rating:"2", 
          isFavorite:true,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 4", 
          status:"",
          current_price:"35", 
          old_price:"5", 
          rating:"2", 
          isFavorite:true,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 5", 
          status:"Sale",
          current_price:"43", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 5", 
          status:"Sale",
          current_price:"15", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 5", 
          status:"Sale",
          current_price:"86", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 5", 
          status:"Sale",
          current_price:"85", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 5", 
          status:"Sale",
          current_price:"85", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 5", 
          status:"Sale",
          current_price:"85", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 5", 
          status:"Sale",
          current_price:"85", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 12", 
          status:"Sale",
          current_price:"85", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 13", 
          status:"Sale",
          current_price:"85", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 14", 
          status:"Sale",
          current_price:"85", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        },
        { _id:"123",
          product_name : "product 15", 
          status:"Sale",
          current_price:"85", 
          old_price:"5", 
          rating:"2", 
          isFavorite:false,
          image : "https://media.allure.com/photos/5c1933c41f198f2c6627f8c8/1:1/w_400%2Cc_limit/tatcha-violet-c-serum.jpg"
        }
    
      ];          
    }
    getAllProducts(){
      return this.products.slice(); //copy from products
    }
}