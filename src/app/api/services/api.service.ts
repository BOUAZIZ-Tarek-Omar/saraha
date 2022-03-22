/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MessageDto } from '../models/message-dto';
import { NotificationDto } from '../models/notification-dto';
import { AuthentificationResponse } from '../models/authentification-response';
import { AuthentificationRequest } from '../models/authentification-request';
import { UserDto } from '../models/user-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly savePath = '/messages/';
  static readonly findAllPublicMessagesPath = '/messages/all/public';
  static readonly markAsFavoritePath = '/messages/mark-as-fav/{id-message}';
  static readonly publishMessagePath = '/messages/publish/{id-message}';
  static readonly findAllReceivedMessagesByUserPath = '/messages/received/{user-id}';
  static readonly findAllSentMessagesByUserPath = '/messages/sent/{user-id}';
  static readonly unmarkAsFavoritePath = '/messages/unmark-as-fav/{id-message}';
  static readonly unPublishMessagePath = '/messages/unpublish/{id-message}';
  static readonly findAllNotificationsByUserPath = '/notifications/{user-id}';
  static readonly loginPath = '/users/login';
  static readonly recentlyJoinedUsersPath = '/users/recently-joined-users';
  static readonly save_1Path = '/users/register';
  static readonly searchUserPath = '/users/search';
  static readonly findByEmailPath = '/users/{user-email}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: MessageDto): __Observable<__StrictHttpResponse<MessageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/messages/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: MessageDto): __Observable<MessageDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as MessageDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllPublicMessagesResponse(): __Observable<__StrictHttpResponse<Array<MessageDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/messages/all/public`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MessageDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllPublicMessages(): __Observable<Array<MessageDto>> {
    return this.findAllPublicMessagesResponse().pipe(
      __map(_r => _r.body as Array<MessageDto>)
    );
  }

  /**
   * @param id-message undefined
   * @return successful operation
   */
  markAsFavoriteResponse(idMessage: number): __Observable<__StrictHttpResponse<MessageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/messages/mark-as-fav/${encodeURIComponent(String(idMessage))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageDto>;
      })
    );
  }
  /**
   * @param id-message undefined
   * @return successful operation
   */
  markAsFavorite(idMessage: number): __Observable<MessageDto> {
    return this.markAsFavoriteResponse(idMessage).pipe(
      __map(_r => _r.body as MessageDto)
    );
  }

  /**
   * @param id-message undefined
   * @return successful operation
   */
  publishMessageResponse(idMessage: number): __Observable<__StrictHttpResponse<MessageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/messages/publish/${encodeURIComponent(String(idMessage))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageDto>;
      })
    );
  }
  /**
   * @param id-message undefined
   * @return successful operation
   */
  publishMessage(idMessage: number): __Observable<MessageDto> {
    return this.publishMessageResponse(idMessage).pipe(
      __map(_r => _r.body as MessageDto)
    );
  }

  /**
   * @param user-id undefined
   * @return successful operation
   */
  findAllReceivedMessagesByUserResponse(userId: number): __Observable<__StrictHttpResponse<Array<MessageDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/messages/received/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MessageDto>>;
      })
    );
  }
  /**
   * @param user-id undefined
   * @return successful operation
   */
  findAllReceivedMessagesByUser(userId: number): __Observable<Array<MessageDto>> {
    return this.findAllReceivedMessagesByUserResponse(userId).pipe(
      __map(_r => _r.body as Array<MessageDto>)
    );
  }

  /**
   * @param user-id undefined
   * @return successful operation
   */
  findAllSentMessagesByUserResponse(userId: number): __Observable<__StrictHttpResponse<Array<MessageDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/messages/sent/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MessageDto>>;
      })
    );
  }
  /**
   * @param user-id undefined
   * @return successful operation
   */
  findAllSentMessagesByUser(userId: number): __Observable<Array<MessageDto>> {
    return this.findAllSentMessagesByUserResponse(userId).pipe(
      __map(_r => _r.body as Array<MessageDto>)
    );
  }

  /**
   * @param id-message undefined
   * @return successful operation
   */
  unmarkAsFavoriteResponse(idMessage: number): __Observable<__StrictHttpResponse<MessageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/messages/unmark-as-fav/${encodeURIComponent(String(idMessage))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageDto>;
      })
    );
  }
  /**
   * @param id-message undefined
   * @return successful operation
   */
  unmarkAsFavorite(idMessage: number): __Observable<MessageDto> {
    return this.unmarkAsFavoriteResponse(idMessage).pipe(
      __map(_r => _r.body as MessageDto)
    );
  }

  /**
   * @param id-message undefined
   * @return successful operation
   */
  unPublishMessageResponse(idMessage: number): __Observable<__StrictHttpResponse<MessageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/messages/unpublish/${encodeURIComponent(String(idMessage))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageDto>;
      })
    );
  }
  /**
   * @param id-message undefined
   * @return successful operation
   */
  unPublishMessage(idMessage: number): __Observable<MessageDto> {
    return this.unPublishMessageResponse(idMessage).pipe(
      __map(_r => _r.body as MessageDto)
    );
  }

  /**
   * @param user-id undefined
   * @return successful operation
   */
  findAllNotificationsByUserResponse(userId: number): __Observable<__StrictHttpResponse<Array<NotificationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/notifications/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<NotificationDto>>;
      })
    );
  }
  /**
   * @param user-id undefined
   * @return successful operation
   */
  findAllNotificationsByUser(userId: number): __Observable<Array<NotificationDto>> {
    return this.findAllNotificationsByUserResponse(userId).pipe(
      __map(_r => _r.body as Array<NotificationDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  loginResponse(body?: AuthentificationRequest): __Observable<__StrictHttpResponse<AuthentificationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/users/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthentificationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  login(body?: AuthentificationRequest): __Observable<AuthentificationResponse> {
    return this.loginResponse(body).pipe(
      __map(_r => _r.body as AuthentificationResponse)
    );
  }

  /**
   * @return successful operation
   */
  recentlyJoinedUsersResponse(): __Observable<__StrictHttpResponse<Array<UserDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/recently-joined-users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  recentlyJoinedUsers(): __Observable<Array<UserDto>> {
    return this.recentlyJoinedUsersResponse().pipe(
      __map(_r => _r.body as Array<UserDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_1Response(body?: UserDto): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/users/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_1(body?: UserDto): __Observable<UserDto> {
    return this.save_1Response(body).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * @param params The `ApiService.SearchUserParams` containing the following parameters:
   *
   * - `user-name`:
   *
   * - `last-name`:
   *
   * - `first-name`:
   *
   * @return successful operation
   */
  searchUserResponse(params: ApiService.SearchUserParams): __Observable<__StrictHttpResponse<Array<UserDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userName != null) __params = __params.set('user-name', params.userName.toString());
    if (params.lastName != null) __params = __params.set('last-name', params.lastName.toString());
    if (params.firstName != null) __params = __params.set('first-name', params.firstName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDto>>;
      })
    );
  }
  /**
   * @param params The `ApiService.SearchUserParams` containing the following parameters:
   *
   * - `user-name`:
   *
   * - `last-name`:
   *
   * - `first-name`:
   *
   * @return successful operation
   */
  searchUser(params: ApiService.SearchUserParams): __Observable<Array<UserDto>> {
    return this.searchUserResponse(params).pipe(
      __map(_r => _r.body as Array<UserDto>)
    );
  }

  /**
   * @param user-email undefined
   * @return successful operation
   */
  findByEmailResponse(userEmail: string): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${encodeURIComponent(String(userEmail))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * @param user-email undefined
   * @return successful operation
   */
  findByEmail(userEmail: string): __Observable<UserDto> {
    return this.findByEmailResponse(userEmail).pipe(
      __map(_r => _r.body as UserDto)
    );
  }
}

module ApiService {

  /**
   * Parameters for searchUser
   */
  export interface SearchUserParams {
    userName?: string;
    lastName?: string;
    firstName?: string;
  }
}

export { ApiService }
