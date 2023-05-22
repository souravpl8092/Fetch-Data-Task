<h1 align="center"> Cartoon Character </h1>

<br/>

<h2>Overview</h2>
 
### This is a web application that displays a grid of cartoon characters using React. It fetches data from the Rick and Morty API and renders the characters in a responsive grid layout.

<br/>

<table>
<tr>
    <td>
      <h2 align="center">Large Screen View - Computer/Laptop</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/zEZ0Mkn.png" alt="Large Screen">
    </td>
  </tr>
</table>

<table>
<tr>
    <td>
      <h2 align="center">Medium Screen View - Tablet</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/cSNyQH2.png" alt="Medium Screen">
    </td> 
  </tr>
</table>

<table>
<tr>
    <td>
      <h2 align="center">Small Screen View - Mobile</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/vESV9vW.png" alt="Small Screen">
    </td>
  </tr>
</table>

<br/>

<h2>Features</h2>

- Pagination: Allows navigating through different pages of cartoon characters.
- Loading Indicator: Displays a loading spinner while the data is being fetched.
- Error Handling: Shows an error message if there is a failure in fetching the data.
- Responsive Grid: Adjusts the number of columns based on the screen size for optimal viewing experience.
- Animation: Applies a zoom-in animation effect to the grid using the AOS library.

<br/>

<h2>Prerequisites</h2>

### Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

<br/>

## Installation

### 1. Clone the repository and install the dependencies:

- git clone https://github.com/souravpl8092/Unvoid_Tech_Studio-Assignment.git
- cd cartoon-character
- npm install

### 2. Start the development server:

- npm start

### 3. Open your browser and visit http://localhost:3000 to view the application.

<br/>

## Folder Structure

### The project follows the following folder structure:

```

├── public
│   └── index.html
│
└── src
    ├── Components
    │   ├── CartoonCard.js
    │   ├── Heading.js
    │   ├── Loading.js
    │   └── Pagination.js
    │
    ├── Pages
    │   └── CartoonDisplay.js
    ├── App.css
    ├── App.js
    ├── index.css
    └── index.js


```

- The public folder contains the HTML template file and other static assets.
- The src folder contains the application source code.
- The Components folder includes reusable components used in the application.
- The Pages folder contains the main page components.
- The App.js file is the entry point of the application.
- The index.js file is the root JavaScript file that renders the application.

<br/>

## Tech Stack

- React
- CSS3
- Rick and Morty API
- AOS

<br/>

## Code Explanation

### Pages/CartoonDisplay.jsx

- This component is responsible for displaying a grid of cartoon characters.
- It uses the useState hook to manage the state of characters, loading, error, and page.
- The fetchData function is an asynchronous function that fetches cartoon characters from the Rick and Morty API based on the current page. It updates the characters state with the fetched data and handles loading and error states.
- The useEffect hook is used to fetch data when the page state changes and initialize the AOS library.
- The component renders a div component as the main container, followed by a Pagination component for navigating through pages.
- If loading is true, a Loading component is rendered to show a loading indicator.
- If error is not null, a Heading component is rendered with an error message.
- If characters is empty, a Heading component is rendered with a "No cartoon character found" message.
- If characters has data, a Grid component is rendered to display the characters in a responsive grid layout. The characters.map function is used to iterate over the characters array and render a CartoonCard component for each character.

### Components/CartoonCard

- This component is responsible for a single card that displays information about a cartoon character.

### Components/Loadings

- This component is responsible for displaying a loading spinner on the screen.

### Components/Heading

- This component is responsible for rendering the header section of the application.

### Components/Pagination

- This component is responsible for a pagination control that allows the user to navigate between pages.

### App.js

- This component is the main entry point of the application.
- It renders a Header component and a CartoonDisplay component within a div container.

### App.css

- App.css is responsible for style the components and elements in the application.

### index.js

- This file is the root JavaScript file that renders the application.
- The ReactDOM.createRoot function is used to create a root for React rendering and the root.render function is called to render the App component within the root element.

<br/>

This code structure allows for modular and reusable components, separation of concerns, and efficient data fetching and rendering of cartoon characters.

<br/>

<h2 align="center">Thank You</h2>
