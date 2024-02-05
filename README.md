# Rate Escape Room

How to run:
Client repo:
1. cd into a new directory using the terminal
2. clone this repo by typing 'git clone https://github.com/tomas-tank3ngine/rate-escape-room.git' in the terminal
3. install npm by typing 'npm i' in the terminal
4. start the client by typing 'npm start' in the terminal

Backend Repo:
1. cd into a new directory using the terminal
2. clone the backend repo by typing 'git clone https://github.com/tomas-tank3ngine/rate-escape-room-server.git'
3. install npm by typing npm i
4. create a new MySQL database
5. create a new .env file in the root directory and populate it with the following information:
    - DB_HOST=127.0.0.1
    - DB_USER= your username
    - DB_PASSWORD= your password
    - DB_DATABASE= the name of the database you created
    - JWT_KEY= a random string of letters and numbers, such as:
6. Populate the database:
    - type 'npm migrate' to create tables
    - type 'npm seed' to populate tables with seed data
7. type 'npm run start' to start the backend server


## Overview

Rate Escape Room is the one-stop collection of escape rooms sourced, rated, and ranked by the escape room community. Room owners add their rooms to the site and players can rate, review, and share the rooms to their friends and family.

Rate Escape Room is a fullstack web application that allows users to create, read, update, and delete content served from a database.

### Problem Space

Escape room ranking websites are nothing new, a quick search will result in many "top 10 escape rooms" sites. These sites, though useful for a quick search, often do not show the true breadth of escape rooms that exist. These sites are usually limited to the "top 5" or "top 10" rooms, when there are thousands of rooms across the world. Escape room franchises also have the same room in multiple locations, and oftentimes the experiences and quality of the rooms differs between locations due to various factors.

There is one website that attempts to be a central source for ranking escape rooms (https://escaperoomrank.com/), however it has a number of problems associated with it. It has not been updated since 2018, the information present is outdated and repetitive, and the all rooms tab is filled with bot answers.


### User Profile

People who will use Rate Escape Room include:
- Escape room owners looking to increase traffic and get the word out about new rooms or old rooms that are being updated.
- Beginner players looking to find affordable rooms at a difficulty level that's right for them.
- Escape room enthusiasts looking for a challenge and bragging rights.



### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- Database accessible via API that holds information about users and escape rooms
- Sort rooms based on:
> - Room Name
> - Room Theme
> - Overall Rating
> - Completion Rate
> - Difficulty
> - Favourite Rooms
- Filter rooms based on:
> - Room Theme
> - Success Rate
> - Group Size
> - Online
> - Offline
> - Price Range
- create account / login to view favourited rooms, rooms posted (for owner accounts), and reviews posted (for player accounts)
- Owner accounts can create, update, and delete room pages
- Player accounts can post comments and reviews to room pages
- Search for rooms near you

## Implementation

### Tech Stack

- axios
- react
- nodemon
- mysql
- express

### APIs
Google APIs
(https://mapsplatform.google.com/pricing/?_gl=1%2A13lzcg2%2A_ga%2AMjEyNTc1NjYzOS4xNzA2MDQxNzU0%2A_ga_NRWSTWS78N%2AMTcwNjA0MTc1NC4xLjEuMTcwNjA0MjI1Ni4wLjAuMA..#pricing-grid)
- Google Geolocation API
- Google Geocoding API
- Google Nearby Search API

### Sitemap
![Rooms Page mobile mockup](./proposal-assets/Sitemap.png)

### Mockups

#### Homepage (/)
![Homepage desktop mockup](./proposal-assets/Desktop_Homepage.png)
![Homepage mobile mockup](./proposal-assets/Mobile_Homepage.png)

#### Rooms Page (/rooms)
![Rooms Page desktop mockup](./proposal-assets/Desktop_Rooms.png)
![Rooms Page mobile mockup](./proposal-assets/Mobile_Rooms.png)

#### Room Details Page (/rooms/:roomId)
![Room Details Page desktop mockup](./proposal-assets/Desktop_Room-Details.png)
![Room Details Page mobile mockup](./proposal-assets/Mobile_Room-Details.png)

#### Rate this Room Page (/rooms/:roomId/rate)
![Rate this Room Page desktop mockup](./proposal-assets/Desktop_Rate-Room.png)
![Rate this Room Page mobile mockup](./proposal-assets/Mobile_Rate-Room.png)

#### Login Page (/accountLogin)
![Login Page desktop mockup](./proposal-assets/Desktop_Log-In.png)
![Login Page mobile mockup](./proposal-assets/Mobile_Log-In.png)

#### Create Account Page (/accountCreate)
![Create Account desktop mockup](./proposal-assets/Desktop_Create-Account.png)
![Create Account mobile mockup](./proposal-assets/Mobile_Create-Account.png)


#### Rooms Near Me Page (/nearbyRooms)
![Rooms Near Me Page desktop mockup](./proposal-assets/Desktop_Search-Nearby.png)
![Rooms Near Me Page mobile mockup](./proposal-assets/Mobile_Search-Nearby.png)

#### Add New Room (/roomCreate)
![Add New Room desktop mockup](./proposal-assets/Desktop_Add-Room.png)
![Add New Room mobile mockup](./proposal-assets/Mobile_Add-Room.png)


### Data

![DrawSQL database](./proposal-assets/drawSQL-rate-escape-room-export-2024-02-03.png)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.
- All rooms: "/rooms"
    - get
    - post
- Single room: "/rooms/:id"
    - get
    - patch
    - delete
- Room Reviews: "/rooms/:id/reviews"
    - get
    - post
- All Users: "/users"
    - get
    - post
- Single User: "/users/:id"
    - get
    - patch
    - delete
- Favorites: "/favorites"
    - get
    - post
    - delete

### Authorization

Authentication functionality will be implemented through validation on client and server side using JWT.
Authorization functionality will be implemented through validation on client and server side using JWT. Users will have a boolean value (is_owner) that will be assigned at account creation. Owners will be able to upload rooms to the site but will not be able to review rooms. Non-owners, i.e. regular users, will be able to review rooms but will not be able to upload rooms.
Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

*Use placeholder data while determinig database structure. Once database is setup, replace placeholder info with database info.*

1. Create Front End HTML and SCSS Structure for:
    - Homepage
    - Room page
    - Room details page
    - Login Page
    - Create Account page
    - Rooms near me page
    - 'add room' page for owner accounts
    - rate this room page
2. add browser routes and links to pages
3. add filter functionality to rooms page
4. add room rating form functionality 
5. add sort functionality to rooms list section on rooms page
6. add favourites functionality to 'add to favourites' button
7. add review/commenting functionality to reviews section in room details page
8. add 'add room' functionality for owner accounts
9. Hookup Google Api to send to google when clicking on address
10. Hookup Google Api to "rooms near me" page

## Nice-to-haves

- Create blog for the web site for better SEO and community engagement
- ReCaptcha validation for creating new account (https://developers.google.com/recaptcha)
- User Authentication using firebase (https://firebase.google.com/docs/firestore)
- Room owners can post updates about their room
- Users can subscribe to an owner's page to get updates about their rooms
- Users can save rooms to their 'favourites' for a collection of their favourite experiences.
- owner account features
- Onboarding for first-time users to show how to find rooms and rank them.
