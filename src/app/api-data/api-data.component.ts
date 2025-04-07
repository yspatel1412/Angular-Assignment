import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {
  articles: any[] = []; 
  isLoading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchNews();  
  }

  fetchNews() {
    this.isLoading = true;
    
    const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2025-03-07&sortBy=publishedAt&apiKey=c25d2a2369244d20842ffca2772f79ca';
    
    this.http.get(apiUrl).subscribe({
      next: (data: any) => {
        this.articles = data.articles;  
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch news articles. Please try again later.';  
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}