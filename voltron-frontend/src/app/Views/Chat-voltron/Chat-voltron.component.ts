import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as signalR from '@microsoft/signalr';
import { NameDialogComponent } from '../name-dialog/name-dialog.component';
import { MatDialog } from '@angular/material/dialog';

interface Message{
  userName: string,
  text: string
}

@Component({
  selector: 'app-Chat-voltron',
  templateUrl: './Chat-voltron.component.html',
  styleUrls: ['./Chat-voltron.component.css']
})
export class ChatVoltronComponent implements OnInit {
  messages: Message[] = []

  connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:44307/MyHub")
  .build();


  messageControl = new FormControl('');
  userName = 'Vini'
  constructor(public dialog: MatDialog) {
    this.openDialog();
   }

  ngOnInit() {
    console.log(this.messages)

  }

  openDialog(){
    const dialogRef = this.dialog.open(NameDialogComponent, {
      width: '250px',
      data: this.userName,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.userName = result;
      this.startConnection();
    })
  }

  startConnection(){
    this.connection.on("newMessage", (userName: string, text: string) =>{
      this.messages.push({
        text: text,
        userName: userName
      });
    });
    this.connection.start();
  }
  sendMessage(){
    this.connection.send("newMessage", this.userName, this.messageControl.value)
    .then(()=>
      {
        this.messageControl.setValue('');
      }
    )
  }
}
