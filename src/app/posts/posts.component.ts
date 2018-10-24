import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../shared/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postList: Array<Post>;

  // subskrybuj dane z listy postow w postService
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.postList = this.route.snapshot.data.Posts;
  }

  // ustal najwyższy kurs
  setMax() {
    return this.postList.find(el => el.cena === Math.max(...this.postList.map(elem => elem.cena)));
  }

  // ustall najniższy kurs
  setMin() {
    return this.postList.find(el => el.cena === Math.min(...this.postList.map(elem => elem.cena)));
  }

  // sortowanie wg daty, rosnąco lub malejąco
  sortByDateAsc() {
    return this.postList.sort((a, b) => (a.data < b.data) ? 1 : ((b.data < a.data) ? -1 : 0));
  }

  sortByDateDesc () {
    return this.postList.sort((a, b) => (a.data > b.data) ? 1 : ((b.data > a.data) ? -1 : 0));
  }

  // sortuj wg ceny, rosnąco lub malejąco
  sortByPriceAsc() {
    return this.postList.sort((a, b) => (a.cena < b.cena) ? 1 : ((b.cena < a.cena) ? -1 : 0));
  }

  sortByPriceDesc() {
    return this.postList.sort((a, b) => (a.cena > b.cena) ? 1 : ((b.cena > a.cena) ? -1 : 0));
  }

  // ustal mediane
  setMedian() {
    this.sortByPriceAsc();

    const half = Math.floor(this.postList.length / 2);

    if (this.postList.length % 2) {
      return this.postList[half].cena;
    } else {
      return (this.postList[half - 1].cena + this.postList[half].cena) / 2.0;
    }
  }
}
