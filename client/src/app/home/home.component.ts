import {data} from 'apollo-client/data/store';
import { Component, OnInit } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import gpl from 'graphql-tag';

// const CurrentUserForProfile = gpl`
//   query CurrentUserForProfile {
//     currentUser {
//       login
//       avatar_url
//     }
//   }
// `;

const GetAuthor = gpl`
  query author {
    firstName
    lastName
  }
`;


@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  currentUser: any;

  constructor(private apollo: Angular2Apollo) {
    // Do stuff
  }

  ngOnInit() {
    this.apollo.watchQuery({
      query: GetAuthor
    }).subscribe(({data}) => {
      debugger;
      this.loading = data.loading;
      this.currentUser = data.currentUser;
    });
  }

}
