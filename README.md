#  MAK Mortal Kombat All Characters Procject

In the this project, a web application for displaying information about Mortal Kombat characters is created. The application allows users to search for specific characters and view details about each character, including their name, image, description, gender, origin, residence, species, and a GIF animation.

## Technologies Used:
1. React: The project is built using React, a JavaScript library for building user interfaces. React allows for the creation of reusable components, making the application more organized and maintainable.
2. React Bootstrap: React Bootstrap is used as a UI framework to provide pre-styled components and layouts. It simplifies the process of building responsive and visually appealing user interfaces.
3. CSS: Cascading Style Sheets (CSS) is used to style the components and layout of the application. The provided index.css file contains custom styles for various elements.
4. react-transition-group: The "react-transition-group" library is used to create animations in the application, specifically for the flip effect of the character cards when they are clicked.

## Project Overview:
The project is divided into several components, each serving a specific purpose:
1. App.js: This is the main component of the application. It imports the "Header" and "CardContainer" components from their respective files and renders them inside a "Container" component.
2. Header.jsx: This component displays the Mortal Kombat logo and a title for the application.
3. CardContainer.jsx: This component handles the display of character cards. It includes a search bar where users can input characters' names to filter the displayed cards. It imports the "CharacterCards" component and iterates through the "data" array (imported from the "data.js" file) to create and display character cards dynamically based on the search input.
4. CharacterCards.jsx: This component represents an individual character card. It uses the "CSSTransition" component from the "react-transition-group" library to create a flip animation effect between the front and back of the card. Clicking on the card triggers the flip animation, revealing character details on the back side.
5. data.js: This file contains an array of 96 character objects, each representing the data of a Mortal Kombat character. This data includes name, image URL, description, gender, origin, residence, species, and GIF URL. 
6. index.css: This CSS file contains custom styles for various elements in the application, including the overall layout and styling of the character cards.
<br>
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjQwazhtbmhoM2pzc2ExYXptYmF1Njltb3g0aDdxOXc1MG95c3Z6bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tIDiDV9W90meCzZZuY/giphy.gif" align="center" width="800">




## Project Skeleton

```
├── public
│     └── index.html
├── src
│    ├── components
│    │       ├── Header.js
│    │       ├── CardContainer.js
│    │       └── CharacterCard.js
│    ├── helper
│    │       └── data.js (includes 96 Objects in an array)
│    ├── assets.js
│    │       └── [images]
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```



