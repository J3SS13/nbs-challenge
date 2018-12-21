# Data Visualization using D3.js and React.js
### Built for visualizing artist data from Next Big Sound

This data visualization is designed to work alone or as a component within a larger app.

### User Story
This app features a search bar, where a user can input an artist name, rendering a bar chart visualization of social media imprints. When a new artist is displayed, the bar graph will have an animated transition between graph views. The graph colors change, dependent on the data value. If the user searches something that is not found, the app will show a message, asking them to adjust their search terms.

### MVP

+ Search functionality with user-facing error handling
+ Fetch data from Next Big Sound API
+ Bar chart data visualization created using D3.js

### Resources
I used several resources in building this application:
+ [Dynamic Bar Chart with Transitions](https://bl.ocks.org/alokkshukla/5306fdf5684f85d5b768d2bc02013b09)
+ [React Meets D3](https://medium.com/turo-engineering/react-meets-d3-6a40881d0d73)
+ [D3 Docs](https://d3js.org/)

### Challenges
One challenge I faced during this project was my inexperience working with D3. Much of the documentation I found was not specific to React, so this made some concepts more challenging to tackle. I recommend the resources above for using D3 in React.

By taking time to learn D3 through documentation and practice in vanilla JS, before adding it into my React app, I was able to focus on D3 concepts separately from a React use case. Similarly, I completed all other functionality of my React app before adding D3 as Class component, so when I was adding D3 to React, my sole focus was getting it tor render correctly and update with state changes.

Working with D3 in React deepened my understanding of life-cycle methods, and their importance to D3 functionality.  

### Post MVP
In future stages of development, I would like to build out a more advanced search. Additionally, I would like to include a more robust use from D3, as this visualization barely scratches the surface of what can be done.


#### Thank you to Next Big Sound for giving me access to their API!
