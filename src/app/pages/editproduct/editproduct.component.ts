import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from 'src/app/services/ngservice.service';
import { Product } from 'src/app/services/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{
 
  product=new Product();
  
  constructor(private route:Router,private service:NgserviceService,private activatedRouter:ActivatedRoute){}
  
  ngOnInit() {
  // let id= parseInt(this.activatedRouter.snapshot.paramMap.get('id'));
  // this.service.getProdcutByIdFromRemote(id).subscribe(
  //   data=>{
  //     console.log("data recived");
  //      this.product=data;
  //   },
  //   error=>console.log("error accurd")
    
  // )
  }
  updateproductformsubmit()

  {
    if(this.product.id==''||this.product.name==null ||this.product.price==null||this.product.about==null)
    {
        console.log("data not  entered ");
        Swal.fire("Bad Job!", "Something Went Wrong !!! ", "error");
        return;
      //error=>console.log("error")
    }

    this.service.addProductToRemote(this.product).subscribe(
      data=>{

        Swal.fire("Good job!", "Product Updated Successfully ", "success",)
        this.route.navigate(['productlist']);
      }),
      ()=>console.log("Error Occurd")
      
    }
  gotolist()
  {
    console.log("go_back");
    this.route.navigate(['productlist']);
  }

}

