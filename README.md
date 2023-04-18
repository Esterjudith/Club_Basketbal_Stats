# Club basketball stats tracker

In this app is for club basketball :basketball: teams to keep track of each of their players stats and store it in a database.

https://clubbasketballstatstracker.cyclic.app/

https://user-images.githubusercontent.com/106325339/201497517-15459e60-d243-458e-b4a4-0accf5f5af85.mp4

# How it's made:

##Teck used: Javascript, CSS, Bootstrap, Node.js, Express

With the use of MVC we can separate the router, connection to the database (model) and the asynchronize code in the controller to make it earsier to read.
The page is rendered using EJS templating and Bootstrap with some CSS thrown in . When the user loads the page their http request gets the login/sign up page as a response once the user is validated with passport their profile is rendered to the user. In the profile page user can see the stats chart for each player, in here the user can add new players by clicking into the players page and they can keep track the stats for each player during the game.
Instead of updatings each stat with a put request I have nested each +/- button in a form and used the post request with method-override middleware in order to change the post request value as a put request.

#Optimizations

This app was a ton of fun to create and plan on adding more things to optimize speed and performance :smirk:. For performance, adding an update button will be my next step and to optimize rending speed I'll be making the stats update buttons React components instead of updating as forms so only the buttons themselves will update on each user request instead of the whole page loading.

In order to create the Parallax effect on the landing page, a section with the class of "image" was added to all the sections that wrapped the content, this in turn was styled with the background-image & background-position property in CSS.

the ::before attribute was use to create the slanted look for each of the content sections. For the hero section the height of the pseudo element had to be narrow in order to avoid using the z-index. For the second wrapper section the z-index property was nessesary because the height of the ::before had to be long enough to cover the background on the right side of the section. Therefore the header had to be put in a higher z-index.
