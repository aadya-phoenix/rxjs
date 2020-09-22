import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient:HttpClient) { }
  doAjax():Observable<any>{
    const url = 'https://raw.githubusercontent.com/aadya-phoenix/serverData/master/mobiles.json';
 
         return this.httpClient.get(url);
        }
        
        
        
       
  }

