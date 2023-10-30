import { Component, OnInit } from '@angular/core';
import { getNews } from './app.newapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'News Hub';
  newsArticles: any[] = []; // Define a property to store news articles

  ngOnInit() {
    this.fetchNews(); // Call the fetchNews method when the component initializes
  }

  async fetchNews() {
    try {
      const newsArticles = await getNews('Asia Cup');
      this.newsArticles = newsArticles; // Update the property with fetched news
      //console.log('News Articles:', newsArticles);
    } catch (error) {
      // Handle errors here
    }
  }
}
