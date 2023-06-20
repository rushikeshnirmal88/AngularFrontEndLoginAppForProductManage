import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from 'src/app/services/ngservice.service';
import { Product } from 'src/app/services/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{

  product=new Product();
  
  constructor(private route:Router,private service:NgserviceService){}
  ngOnInit(): void {
    
    
  }

  addproductformsubmit()
  {
    if(this.product.id==''||this.product.name==null)
    {
        console.log("data not  entered ");
        Swal.fire("Oops!", "Something Went Wrong !!!", "error");
        return;
      //error=>console.log("error")
    }

    this.service.addProductToRemote(this.product).subscribe(
      data=>{

        Swal.fire("Good job!", "Product Added Successfully!!!", "success",)
        this.route.navigate(['productlist']);
        return;
      }),
      ()=>console.log("Error Occurd")
    // this.service.addProductToRemote(this.product).subscribe(
    //   data=>{

    //     Swal.fire("Good job!", "Product Added Successfully ", "success",)
    //     console.log("data entered successfully");
    //     this.route.navigate(['productlist']);
    //   },
    //   error=>console.log("error")
    //  // Swal.fire("failed", "Product Not Successfully ", "error",);
    // )
  }

  gotolist()
  {
    console.log("go_back");
    this.route.navigate(['productlist']);
  }

}
