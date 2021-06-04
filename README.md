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

While on the home page, you can clearly see the banner for the application, as well as the 10 most recently added beers. The navbar has links for user auth and creation as well as a search bar so that a user can easily find the beer that they are trying to review or inspect. Both user auth and account creation are handled through modals that appear when you click on their respective buttons. Also on the navbar, there is a button that will alway redirect the user to the home page from anywhere in the site. A logged in user has a button on the navbar that will redirect them to their own personal user page. At the bottom of the home page there is a clickable link to display more beers if a user is just looking to browse for random beers. 

<img width="1437" alt="Screen Shot 2021-06-04 at 11 55 50 AM" src="https://user-images.githubusercontent.com/74081636/120829975-064eea00-c52c-11eb-86ff-68adbe620802.png">
<img width="1420" alt="Screen Shot 2021-06-04 at 11 56 04 AM" src="https://user-images.githubusercontent.com/74081636/120829980-0818ad80-c52c-11eb-8129-752ef4b67ad1.png">

![hoptimistmodal](https://user-images.githubusercontent.com/74081636/120830694-c50b0a00-c52c-11eb-85ae-b22721b8d180.png)

### Beer Search and CRUD

By using the searchbar a user can check if we have the beer that they are looking for in our database. If we do then it will display filtered options on page as clickable cards that will redirect the use to the specific beers page. If the search does not come up with any results the user is prompted to add the beer into the database, with a link that will lead them to the beer creation form. Hiding the add beer form behind this search functionality helps to ensure that users do not attempt to replicate beers that are already in our database.

![hoptimist1](https://user-images.githubusercontent.com/74081636/120830686-c2a8b000-c52c-11eb-8555-bcac694c670e.png)
![hoptimist2](https://user-images.githubusercontent.com/74081636/120830697-c63c3700-c52c-11eb-9bd9-fcfa818dcbdb.png)

### Beer Display Page and Reviews

By clicking on one of the beer cards shown on either the home page or the search page you will be redirected to the specific beer page. This page displays all reviews, as well as who left the review, and gives the user options to add a review or add the beer to their wishlist. Once the add review button is clicked, it hides the reviews and replaces them with a form where the user can leave his own review, upon submission the review is added and it renders the updated reviews page.

![hoptimist4](https://user-images.githubusercontent.com/74081636/120830708-c805fa80-c52c-11eb-9bc8-72f5c7546151.png)
![hoptimist5](https://user-images.githubusercontent.com/74081636/120830715-c9372780-c52c-11eb-846a-2af94be570f9.png)

### User Page

The final page that was worked on is the user page. From here a logged in user can check out any beers that they have added, reviews that they have left, and their wishlist. From here a user can review what they have done in the past, check any updated reviews for products, and see which products they would like to sample in the future. 

![hoptimist6](https://user-images.githubusercontent.com/74081636/120830675-c0465600-c52c-11eb-9a96-83bfdc8e6d39.png)

More information about the database, API routes, or frontend routes can be found by checking out the [Hoptimist Wiki](https://github.com/arb5433/HOPtimist/wiki).
