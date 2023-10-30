import axios, { AxiosResponse } from 'axios';

// Access the API key from the environment variables
const apiKey = 'e07d2981671c4e31a00da8cbc5a12e75';
const apiUrl = 'https://newsapi.org/v2/everything';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
}

async function getNews(query: string): Promise<NewsArticle[]> {
  try {
    const response: AxiosResponse = await axios.get(apiUrl, {
      params: {
        apiKey,
        q: query,
      },
    });

    const articles: NewsArticle[] = response.data.articles.map((article: any) => ({
      title: article.title,
      description: article.description,
      url: article.url,
    }));

    return articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}

export { getNews };
