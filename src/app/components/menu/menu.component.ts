import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from 'src/app/api/services/utils/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  connectedUser = '';
  searchKey? = '';

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {
  }

  ngOnInit(): void {
    this.connectedUser = this.storageService.getUser().firstname + ' ' + this.storageService.getUser().lastname;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  searchUser(): void {
    this.router.navigate([this.storageService.getUsername() + '/search', this.searchKey]);
  }
}
