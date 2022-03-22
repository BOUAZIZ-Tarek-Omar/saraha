import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() imageUrl = "../../assets/user-logo.png";
  @Input() displayLabel = "";//chaine vide car envoi anonyme
  @Input() userId :any;
  @Output() avatarClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAvatarClick() {
    if(this.userId!==undefined && this.userId !== -1){
      this.avatarClick.emit(this.userId);
    }
  }
}
