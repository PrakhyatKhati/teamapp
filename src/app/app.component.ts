import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title = 'teamapp';
  // lets first store the input of the Name of the new member.
  newMemberName = '';
  totalTeamNumber: number | '' = '';
  teams: string[][] = []; // this will the array of string, the new string of tha array of array strings.
  // lets have the members empty array iniitally.
  members: string[] = []; // here just by using array, what will be the data type of the array. // so add array of string

  // here we are handling the error message of empty string here
  errormessage = '';

  // this is the method to get the types data in the textbox.
  onInput(member: string) {
    // console.log("we are typing something",member);
    this.newMemberName = member;
    console.log(this.newMemberName);
  }

  onTeamsInput(value: string) {
    this.totalTeamNumber = Number(value);
  }
  // this is the method that gets invoked the click event.
  addMembers() {
    // if the add field is empty then get error message.
    if (!this.newMemberName) {
      this.errormessage = "Name can't be empty";
      return;
    }
    // so the above is the check whether the text is empty of not.
    this.errormessage = '';
    //console.log("So we are invoking the add button.")
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    // console.log(this.members);
  }

  // Now this is the time for the Generate.

  totalTeams() {
    //check the value
    if (!this.totalTeamNumber || this.totalTeamNumber <= 0) {
      // display the error message.
      this.errormessage="Invalid input "
      return;
      //
    }
    // no we shall also check the data in the members 

    if(this.members.length<this.totalTeamNumber){
      this.errormessage="Not enough number of member"
      return
    }


    this.errormessage="";
    const allMembers = [...this.members];

    while (allMembers.length) {
      // Now we will run the loop and create a random number generator.
      for (let i = 0; i < this.totalTeamNumber; i++) {
        // here we are generating the random number
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        console.log(randomIndex);
        const member = allMembers.splice(randomIndex, 1)[0]; // this will be the first element in the new array.
        // here the member is an array value
        if (!member) break;

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
      console.log(this.teams);
    }
    this.members=[];
    this.totalTeamNumber="";
  }
}   
