# HOPtimist

## Project Overview
*** 
[Hoptimist](https://hoptimist-app.herokuapp.com/) is a functional clone of the Untappd app, with some changes to the sites general css and feel. This full stack project was created to help improve my skills with React / Redux as well as solidify my utilization of a sequelize / express backend. 

### MVP Features and Completed Stretch Goals
* Account Creation / Login / Logout / Guest-Login
* CRUD Beer Functionality
* Review Beers
* Review Feed
* User Profile
* Search

### Home Page and Navbar

While on the home page, you can clearly see the banner for the application, as well as the 10 most recently added beers. The navbar has links for user auth and creation as well as a search bar so that a user can easily find the beer that they are trying to review or inspect. Also on the navbar, there is a button that will alway redirect the user to the home page from anywhere in the site. A logged in user has a button on the navbar that will redirect them to their own personal user page. At the bottom of the home page there is a clickable link to display more beers if a user is just looking to browse for random beers. 

<img width="1437" alt="Screen Shot 2021-06-04 at 11 55 50 AM" src="https://user-images.githubusercontent.com/74081636/120829975-064eea00-c52c-11eb-86ff-68adbe620802.png">
<img width="1420" alt="Screen Shot 2021-06-04 at 11 56 04 AM" src="https://user-images.githubusercontent.com/74081636/120829980-0818ad80-c52c-11eb-8129-752ef4b67ad1.png">

### Beer Search and CRUD

By using the searchbar a user can check if we have the beer that they are looking for in our database. If we do then it will display filtered options on page as clickable cards that will redirect the use to the specific beers page. If the search does not come up with any results the user is prompted to add the beer into the database, with a link that will lead them to the beer creation form. Hiding the add beer form behind this search functionality helps to ensure that users do not attempt to replicate beers that are already in our database.

![hoptimist1](https://user-images.githubusercontent.com/74081636/120830686-c2a8b000-c52c-11eb-8555-bcac694c670e.png)
![hoptimist2](https://user-images.githubusercontent.com/74081636/120830697-c63c3700-c52c-11eb-9bd9-fcfa818dcbdb.png)
