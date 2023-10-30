import { Component, Input } from '@angular/core';
import { getNews } from './app.newapi';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  userquery: string = ''; // Initialize the userquery variable
  @Input() newsArticles: any[] = []; // Initialize the property in the constructor

  // Handle user input when the value changes
  onUserQueryChange() {
    // No need to log the userquery here, as it's already logged in the parent component
  }

  // Handle user's query when the "Submit" button is clicked
  async submitQuery() {
    console.log('User Query Submitted:', this.userquery);

    // Fetch news based on the user's query
    try {
      const newsArticles = await getNews(this.userquery);
      this.newsArticles = newsArticles;
    } catch (error) {
      console.error(error)
    }
  }
}
