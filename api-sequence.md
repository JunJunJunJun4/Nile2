flowchart TD

A[Login] --> B[Get User]
A --> C[Get Stats]

B --> D[Get Quizzes]

D --> E[Get Quiz Detail]
E --> F[Get Questions]

F --> G[Create Attempt]

G --> H[Save Answer]

H --> I[Finish Attempt]

I --> J[Update Stats]
I --> K[Get Recommendations]

F --> L[Get Bookmarks]
L --> M[Add Bookmark]
L --> N[Delete Bookmark]

F --> O[Get Comments]
O --> P[Post Comment]
