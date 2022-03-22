import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageDto} from "../../api/models/message-dto";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  //@Input() messageId: number | undefined;
  @Input() message: MessageDto | undefined;
  @Input() showFavButton = true;
  @Input() showPublishButton = true;
  @Input() showDeleteButton = true;
  @Input() showAllButton = true;

  @Output() favClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() publishClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  onFavClick(): void {
    this.favClick.emit(this.message?.id);

  }

  onPublishClick(): void {
    this.publishClick.emit(this.message?.id);
  }

  onDeleteClick(): void {
    this.deleteClick.emit(this.message?.id);
  }
}
