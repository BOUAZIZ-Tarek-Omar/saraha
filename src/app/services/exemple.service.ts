import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {MessageDto} from "./Dto/MessageDto";

@Injectable({
  providedIn: 'root'
})
export class ExempleService {
  token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJib3Vheml6dGFyYWtAeWFob28uZnIiLCJleHAiOjE2NDM1NDk0NjgsImlhdCI6MTY0MzUxMzQ2OH0.ELbmgZFTfDFf-mS_CWQKoK-wp1s9j6W5bxsmwX5znfI";
  rootUrl="http://localhost:8080/";
  constructor(
    private httpClient: HttpClient
  ) {
  }

  findAllNotificationsByUser(userId:number): Observable<any> {
    let __headers=new HttpHeaders();
    __headers= __headers.set('Authorization', 'Bearer '+this.token);
    const request=new HttpRequest<any>(
      'GET',
      this.rootUrl+'saraha-api/messages/sent/'+userId,
      {
        headers:__headers,//mech n3adi el token here
        params:null,
        responseType:'json'
      }
    );
   return this.httpClient.request(request)
     .pipe(
  filter(r=>r instanceof HttpResponse),
      map(res=> res as any)//transformation d'objet
    );
  }
  findAllNotificationsByUser2(userId:number): Observable<MessageDto> {
    let __headers=new HttpHeaders();
    __headers= __headers.set('Authorization', 'Bearer '+this.token);

    return this.httpClient.get(
      this.rootUrl+'saraha-api/messages/sent/'+userId,
      {
        headers:__headers//mech n3adi el token here
      }
    )
      .pipe(
        filter(r=>r instanceof HttpResponse),
        map(res=> (res as HttpResponse<MessageDto>).body as MessageDto)//transformation d'objet
      );
  }
}
