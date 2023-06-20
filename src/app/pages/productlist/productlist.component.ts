import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from 'src/app/services/ngservice.service';
import { Product } from 'src/app/services/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  product=new Product();

  productlist: Product[] = [];
  
  constructor(private service:NgserviceService,private route:Router){}
  ngOnInit(): void 
  {
    this.service.getAllproductFromRemote().subscribe(
      data=>{
   console.log("Response Recived"),
   this.productlist=data;
      },
    error=>console.log("Error Occurd")
    )
        
  }

  goToAddProduct(){
    this.route.navigate(['/addproduct']);
  }
  goToEditProduct(id:number)
  {

    console.log("id"+id);
    this.route.navigate(['/editproduct',id]);
  }
  goToViewProduct(id:number)
  {
    console.log("id"+id);
    this.route.navigate(['/viewproduct',id]);
  }

  goToDeleteProduct(id:number)
  {

    // if(this.product.delete!)
    // {
      
    //     Swal.fire("Good job!", "Product Not Deleted Successfully!!!", "error",)

    //     return;
    // }

    this.service.DeleteProdcutByIdFromRemote(id).subscribe(
      (data:any)=>{
        Swal.fire("Good job!", "Product Deleted Successfully!!!", "success",)
        this.route.navigate(['/productlist']);
        return;
      },
      (error:any)=>console.log("Error Accurd")
    )
  }
}

