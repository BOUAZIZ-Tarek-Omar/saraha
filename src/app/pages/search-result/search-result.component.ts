import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { UserDto } from 'src/app/api/models';
import {ApiService} from "../../api/services/api.service";
import {StorageService} from "../../api/services/utils/storage.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchKeyWord='';
  searchResult:Array<UserDto>=[];
  constructor(
    private api: ApiService,
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute= () => {
      return false;
    };

    this.searchKeyWord=this.activatedRoute.snapshot.params['searchKeyWord'];
    this.searchUser();
  }

  private searchUser():void{
    this.api.searchUser({
      firstName:this.searchKeyWord,
      lastName:this.searchKeyWord,
      userName:this.searchKeyWord
    }).subscribe((res)=>{
    this.searchResult=res;
    });
  }

  sendMessage(userId: number): void {
    if (userId !== undefined && userId !== -1) {
      this.router.navigate([this.storageService.getUsername()+'/send', userId]);
    }
  }
}
