<h1>meetME</h1> 

<h4>-a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.</h4>

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
*As a user I should be able to filter events by city So that I can see the list of events that take place in that city*

<h4>SCENARIO 1:</h4> - When user hasn't searched for a city, show upcoming events from all cities.<br>

Given user hasn’t searched for any city<br> When the user opens the app <br>Then the user should see a list of all upcoming events<br>

<h4>SCENARIO 2: </h4> - User should see a list of suggestions when they seach for a city.<br>

Given the main page is open<br> When user starts typing in the city textbox <br>Then the user should see a list of cities (suggestions) that match what they’ve typed

<h4>SCENARIO 3:</h4> - User can select a city from the suggested list.<br>

Given the user was typing “Berlin” in the city textbox <br>And the list of suggested cities is showing<br> When the user selects a city (e.g., “Berlin, Germany”) from the list <br>Then their city should be changed to that city (i.e., “Berlin, Germany”)<br> And the user should receive a list of upcoming events in that city

<h3>2. Show / Hide event details</h3>
*As a user I should be able to expand event details So that I can view more information about a specific event*

<h4>SCENARIO 1: </h4> - An event element is collapsed by default<br>

Given that an event is present <br>When the user selects "view details" or "view more" <br>Then the element will expand and display the event details

<h4>SCENARIO 2:</h4> - User can expand an event to see its details<br>

Given the event list has loaded When a user selects the event, either link or "view event details" <br>Then the event page will load, displaying all the event details

<h4>SCENARIO 3:</h4> - User can collapse an event to hide its details<br>

Given the user has expanded an events details <br>When the user selects "collaps" or "close" <br>Then the expanded element will collapse, hiding the details of the element

<h3>3. Specify Number of Events</h3>
*As a user I should be able to view a specific number of events per page So that I can adjust my page for screen size and load time*

<h4>SCENARIO 1:</h4> - When user hasn’t specified a number, 32 is the default number<br>

Given the events list has loaded and the user has not specified the number of events to load <br>When the user opens the event list<br> Then 32 events should load on the screen (assuming there is at least 32 events)

<h4>SCENARIO 2:</h4> - User can change the number of events they want to see<br>

Given the events have loaded <br>When a user has specified a number (i.e. 5) for the amount of events to view <br>Then only the specified number (5) of events should load

<h3>4. Use the App Offline</h3>
*As a user I should be able to use the app offline So that I can view event information without having to connect to the internet/use data*

<h4>SCENARIO 1:</h4> - Show cached data when there’s no internet connection<br>

Given the app has been openned previously with an internet connection When a user opens the app <br>Then the previously cached data should be persistent within the app

<h4>SCENARIO 2:</h4> - Show error when user changes the settings (city, time range)<br>

Given the app has cached data When a user changes settings <br>Then an error should inform them that it requires an internet connection to load new data

<h3>5. Data Visualization</h3>
*As a user I should be able to view the number of events by city So that I can visualize data about where events are taking place*

<h4>SCENARIO 1:</h4> - Show a chart with the number of upcoming events in each city<br>

Given that there are events loaded When a user goes to the data page <br>Then a chart with visualized data showing how many events per city should load.
<h2></h2>
