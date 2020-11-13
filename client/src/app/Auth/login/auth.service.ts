import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  getAuthToken(email, password){
    return this.http.post('http://localhost:3000/admin', {"email": email, "password": password})
    .toPromise()
    .then(function(res){
      return ((res: Response) => res.json())
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
