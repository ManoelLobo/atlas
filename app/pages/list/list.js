import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {ItemDetailsPage} from '../item-details/item-details';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    /*
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    */

    this.ascaris = {
        title: "Ascaris lumbricoides",
        imgs: [
            "img/atlas/ascaris/01.jpg",
            "img/atlas/ascaris/02.jpg",
            "img/atlas/ascaris/03.jpg"
        ]
    };
    this.enterobius = {
        title: "Enterobius vermicularis",
        imgs: [
            "img/atlas/enterobius/01.jpg",
            "img/atlas/enterobius/02.jpg",
            "img/atlas/enterobius/03.jpg"
        ]
    };
    this.trichuris = {
        title: "Trichuris trichiura",
        imgs: [
            "img/atlas/trichuris/01.jpg",
            "img/atlas/trichuris/02.jpg",
            "img/atlas/trichuris/03.jpg"
        ]
    };


    this.items = [
        this.ascaris,
        this.enterobius,
        this.trichuris
    ];
    /*
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  itemTapped(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
     });
  }
}
