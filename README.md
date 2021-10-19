<h1>meetME</h1> 

<h4>meetME is a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.</h4>


<p>Main view: <br> After Login, here users can search events from different cities, users can define the number of search results and show or hide a chart which shows the number of events in each citiy. </p>

<img src="https://user-images.githubusercontent.com/62619507/131874570-cb112833-3521-4fa9-98d3-c16587f0e1a4.png">

<p>Modal is open: <br> If users clicks on 'More details' button a modal is opening and shows more details about the event. </p>

<img src="https://user-images.githubusercontent.com/62619507/131874715-b70a344a-2334-4ff8-af7f-3ce3d0e9d8c4.png">

<p>Show statistics: <br> If users clicks on 'Show stats' button a modal is opening and shows statistics about the event and number of events in every city. After clicking on 'Hide stats' button the modal closes. </p>

<img src ="https://user-images.githubusercontent.com/62619507/132352997-16dc1ecb-8cd1-4384-9e33-2c22d1ef5fae.png">

In the project directory, you can run:

```npm start``` <br>
Runs the app in the development mode.
Open **http://localhost:3000** to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```npm test```<br>
Launches the test runner in the interactive watch mode.

```npm run build```<br>
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!


<h2>Features and Requirements</h2>
<ul>
  <li>Filter events by city.</li>
  <li>Show/hide event details.</li>
  <li>Specify number of events.</li>
  <li>Use the app when offline.</li>
  <li>Add an app shortcut to the home screen.</li>
  <li>View a chart showing the number of upcoming events by city</li>
</ul>

<h2>Technical Requirements</h2>
  <ul>
    <li> The app must be a React application.</li>
    <li> The app must be built using the TDD technique.</li>
    <li> The app must use the Google Calendar API and OAuth2 authentication flow.</li>
    <li>The app must use serverless functions (AWS lambda is preferred) for the authorization server</li>
    instead of using a traditional server.</li>
    <li> The app’s code must be hosted in a Git repository on GitHub.</li>
    <li> The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
    as on IE11.</li>
    <li> The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
    and 320px.</li>
    <li> The app must pass Lighthouse’s PWA checklist.</li>
    <li> The app must work offline or in slow network conditions with the help of a service worker.</li>
    <li> Users may be able to install the app on desktop and add the app to their home screen on
    mobile.</li>
    <li>The app must be deployed on GitHub Pages.</li>
    <li> The API call must use React axios and async/await.</li>
    <li> The app must implement an alert system using an OOP approach to show information to the
    user.</li>
    <li> The app must make use of data visualization (recharts preferred).</li>
    <li>The app must be covered by tests with a coverage rate >= 90%.</li>
    <li> The app must be monitored using an online monitoring tool.</li>
  </ul>

<h2>Dependencies</h2>
testing-library/jest-dom - testing-library/react - testing-library/user-event - atatus-spa - axios - moment - nprogress - react - react-dom - react-scripts - recharts - web-vitals - workbox-background-sync - workbox-broadcast-update - workbox-cacheable-response - workbox-core - workbox-expiration - workbox-google-analytics - workbox-navigation-preload - workbox-precaching - workbox-range-requests - workbox-routing - workbox-strategies - workbox-streams
<br>
<h3>DevDependencies</h3>

@wojtekmaj/enzyme-adapter-react-17 - enzyme - jest-cucumber - puppeteer

<h2>Project Brief</h2>
<h4>Gherkin syntax</h4>

<h3>1. Filter events by city</h3>
<h4>As a user I should be able to filter events by city So that I can see the list of events that take place in that city</h4>

<h4>SCENARIO 1:</h4> 
<p>- When user hasn't searched for a city, show upcoming events from all cities.<br><br></p>

**Given** user hasn’t searched for any city<br> 
**When** the user opens the app <br>
**Then** the user should see a list of all upcoming events<br>

<h4>SCENARIO 2: </h4> 
<p>- User should see a list of suggestions when they seach for a city.<br><br></p>

**Given** the main page is open<br> 
**When** user starts typing in the city textbox <br>
**Then** the user should see a list of cities (suggestions) that match what they’ve typed

<h4>SCENARIO 3:</h4> 
<p>- User can select a city from the suggested list.<br><br></p>

**Given** the user was typing “Berlin” in the city textbox <br>
**And** the list of suggested cities is showing<br> 
**When** the user selects a city (e.g., “Berlin, Germany”) from the list <br>
**Then** their city should be changed to that city (i.e., “Berlin, Germany”)<br>
**And** the user should receive a list of upcoming events in that city

<h3>2. Show / Hide event details</h3>
<h4>As a user I should be able to expand event details So that I can view more information about a specific event</h4>

<h4>SCENARIO 1: </h4> 
<p>- An event element is collapsed by default<br><br></p>

**Given** that an event is present <br>
**When** the user selects "view details" or "view more" <br>
**Then** the element will expand and display the event details

<h4>SCENARIO 2:</h4> 
<p>- User can expand an event to see its details<br><br></p>

**Given** the event list has loaded<br> 
**When** a user selects the event, either link or "view event details" <br>
**Then** the event page will load, displaying all the event details

<h4>SCENARIO 3:</h4> 
<p>- User can collapse an event to hide its details<br><br></p>

**Given** the user has expanded an events details <br>
**When** the user selects "collaps" or "close" <br>
**Then** the expanded element will collapse, hiding the details of the element

<h3>3. Specify Number of Events</h3>
<h4>As a user I should be able to view a specific number of events per page So that I can adjust my page for screen size and load time</h4>

<h4>SCENARIO 1:</h4>
<p>- When user hasn’t specified a number, 32 is the default number<br><br></p> 

**Given** the events list has loaded and the user has not specified the number of events to load <br>
**When** the user opens the event list<br> 
**Then** 32 events should load on the screen (assuming there is at least 32 events)

<h4>SCENARIO 2:</h4> 
<p>- User can change the number of events they want to see<br><br></p>

**Given** the events have loaded <br>
**When** a user has specified a number (i.e. 5) for the amount of events to view <br>
**Then** only the specified number (5) of events should load

<h3>4. Use the App Offline</h3>
<h4>As a user I should be able to use the app offline So that I can view event information without having to connect to the internet/use data</h4>

<h4>SCENARIO 1:</h4>
<p>- Show cached data when there’s no internet connection<br><br></p> 

**Given** the app has been openned previously with an internet connection <br>
**When** a user opens the app <br>
**Then** the previously cached data should be persistent within the app

<h4>SCENARIO 2:</h4> 
<p>- Show error when user changes the settings (city, time range)<br><br></p>

**Given** the app has cached data<br>
**When** a user changes settings <br>
**Then** an error should inform them that it requires an internet connection to load new data

<h3>5. Data Visualization</h3>
<h4>As a user I should be able to view the number of events by city So that I can visualize data about where events are taking place</h4>

<h4>SCENARIO 1:</h4> 
<p>- Show a chart with the number of upcoming events in each city<br><br></p>

**Given** that there are events loaded <br>
**When** a user goes to the data page <br>
**Then** a chart with visualized data showing how many events per city should load.


<h2>Contact</h2>

[<img align="left" alt="linkedin profile" width="25px" src="./src/img/linkedin.svg" />][linkedin]
[<img align="left" alt="twitter profile" width="25px" src="./src/img/twitter.svg" />][twitter]
[<img align="left" alt="portfolio website" width="25px" src="./src/img/website.svg" />][website]
[<img align="left" alt="send me an email" width="25px" src="./src/img/mail.svg" />](mailto:mihocsa48@gmail.com)-> <mihocsa48@gmail.com>


[linkedin]: https://www.linkedin.com/in/mihocsaszilard/
[twitter]: https://twitter.com/MihocsaS
[website]: https://mihocsaszilard.github.io/Portfolio-Website-CF/
