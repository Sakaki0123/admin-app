import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] | undefined;
  selectedMember: Member | undefined;
// dependency Injection(DI)
  constructor(
    private memberService: MemberService,
    private messageService: MessageService
    ) { }

  // ライフサイクルメソッド
  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
    // console.log(this.selectedMember);
    this.messageService.add(`MembersComponent: 社員データ(id=${member.id})が選択されました！`);
  }

  getMembers(): void {
    this.memberService.getMembers() // Observable
    .subscribe(members => this.members = members);
  }
}