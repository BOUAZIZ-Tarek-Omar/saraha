import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService} from "../../api/services/api.service";
import {StorageService} from "../../api/services/utils/storage.service";
import {MessageDto} from "../../api/models/message-dto";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  message: MessageDto = {
    receiverId: -1,
    content: ''

  }
  private receiverId?: number;
  errMsg = [];

  constructor(
    private storageService: StorageService,
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.receiverId = this.activatedRoute.snapshot.params?.['receiverId'];
  }

  sendMessage(): void {
    if (this.receiverId != null) {
      this.message.receiverId = this.receiverId;
      this.message.senderId = this.storageService.getUser()?.id;
      this.message.typeMsg = 'SENT';
      this.api.save(this.message).subscribe(() => {
          this.router.navigate([this.storageService.getUsername() + '/sent-messages']);
        }, (err) => {
          console.log(err);
        const validationErrors = err.errors;
        console.log(validationErrors);
        }
      );
    }

  }
}
