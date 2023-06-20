import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private httpClient:HttpClient) { }
  getAllproductFromRemote():Observable<any>
  {
    return this.httpClient.get<any>("http://localhost:8080/getproductlist");
  }
  addProductToRemote(product:Product):Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:8080/addProduct",product);

  }
  getProdcutByIdFromRemote(id:number):Observable<any>
  {
    return this.httpClient.get<any>("http://localhost:8080/getProduct/"+id);

  }
  DeleteProdcutByIdFromRemote(id:number):Observable<any>
  {
    return this.httpClient.delete<any>("http://localhost:8080/deleteProduct/"+id);
  }

}
