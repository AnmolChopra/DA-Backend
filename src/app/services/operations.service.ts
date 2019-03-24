import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OperationsService {
url="http://ec2-34-229-241-186.compute-1.amazonaws.com/"
  constructor(private http:HttpClient) { }

//                               Admin Login

  admlog(data){
    return this.http.post(this.url+'admlog',data);
  }

//                          Teacher Login

techlog(data){
  return this.http.post(this.url+'techlog',data);
}


//                                Change Password

findpass(data){
  return this.http.post(this.url+'findpass',data);
}

chgpass(data){
  return this.http.post(this.url+'chgpass',data);
}

//                              Forget Password

forget(data){
  return this.http.post(this.url+'forget',data);
}


  addtopic(data){
    return this.http.post(this.url+'addtopic',data);
  }

  fetchtopic(){
    return this.http.get(this.url+'fetchtopic');
  }

  fetchAll(){
    return this.http.get(this.url+'fetchAll');
  }

  addteach(data){
    return this.http.post(this.url+'addteacher',data);
  }

  addquiz(data){
    return this.http.post(this.url+'addquiz',data);
  }
              //                   Chapter 2 Starts
  addtopic2(data){
    return this.http.post(this.url+'addtopic2',data);
  }

  fetchtopic2(){
    return this.http.get(this.url+'fetchtopic2');
  }

  fetchAll2(){
    return this.http.get(this.url+'fetchAll2');
  }

  addquiz2(data){
    return this.http.post(this.url+'addquiz2',data);
  }

  //                        Chapter3 Starts
  addtopic3(data){
    return this.http.post(this.url+'addtopic3',data);
  }

  fetchtopic3(){
    return this.http.get(this.url+'fetchtopic3');
  }

  fetchAll3(){
    return this.http.get(this.url+'fetchAll3');
  }

  addquiz3(data){
    return this.http.post(this.url+'addquiz3',data);
  }
 //                     Chapter4 Starts
 addtopic4(data){
  return this.http.post(this.url+'addtopic4',data);
}

fetchtopic4(){
  return this.http.get(this.url+'fetchtopic4');
}

fetchAll4(){
  return this.http.get(this.url+'fetchAll4');
}

addquiz4(data){
  return this.http.post(this.url+'addquiz4',data);
}

//                         Chapter 5 Starts

addtopic5(data){
  return this.http.post(this.url+'addtopic5',data);
}

fetchtopic5(){
  return this.http.get(this.url+'fetchtopic5');
}

fetchAll5(){
  return this.http.get(this.url+'fetchAll5');
}

addquiz5(data){
  return this.http.post(this.url+'addquiz5',data);
}

//                        chapter 6 starts

addtopic6(data){
  return this.http.post(this.url+'addtopic6',data);
}

fetchtopic6(){
  return this.http.get(this.url+'fetchtopic6');
}

fetchAll6(){
  return this.http.get(this.url+'fetchAll6');
}

addquiz6(data){
  return this.http.post(this.url+'addquiz6',data);
}

//                                Chapter 7 Starts
addtopic7(data){
  return this.http.post(this.url+'addtopic7',data);
}

fetchtopic7(){
  return this.http.get(this.url+'fetchtopic7');
}

fetchAll7(){
  return this.http.get(this.url+'fetchAll7');
}

addquiz7(data){
  return this.http.post(this.url+'addquiz7',data);
}
//                                Chapter 8 Starts

addtopic8(data){
  return this.http.post(this.url+'addtopic8',data);
}

fetchtopic8(){
  return this.http.get(this.url+'fetchtopic8');
}

fetchAll8(){
  return this.http.get(this.url+'fetchAll8');
}

addquiz8(data){
  return this.http.post(this.url+'addquiz8',data);
}

//                      Chapter 9 Starts

addtopic9(data){
  return this.http.post(this.url+'addtopic9',data);
}

fetchtopic9(){
  return this.http.get(this.url+'fetchtopic9');
}

fetchAll9(){
  return this.http.get(this.url+'fetchAll9');
}

addquiz9(data){
  return this.http.post(this.url+'addquiz9',data);
}


//                            Chapter 10 Starts

addtopic10(data){
  return this.http.post(this.url+'addtopic10',data);
}

fetchtopic10(){
  return this.http.get(this.url+'fetchtopic10');
}

fetchAll10(){
  return this.http.get(this.url+'fetchAll10');
}

addquiz10(data){
  return this.http.post(this.url+'addquiz10',data);
}

//                            Chapter 11 Starts
addtopic11(data){
  return this.http.post(this.url+'addtopic11',data);
}

fetchtopic11(){
  return this.http.get(this.url+'fetchtopic11');
}

fetchAll11(){
  return this.http.get(this.url+'fetchAll11');
}

addquiz11(data){
  return this.http.post(this.url+'addquiz11',data);
}

//                            Chapter 12 Starts

addtopic12(data){
  return this.http.post(this.url+'addtopic12',data);
}

fetchtopic12(){
  return this.http.get(this.url+'fetchtopic12');
}

fetchAll12(){
  return this.http.get(this.url+'fetchAll12');
}

addquiz12(data){
  return this.http.post(this.url+'addquiz12',data);
}
}
