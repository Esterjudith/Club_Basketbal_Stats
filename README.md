# Club basketball stats tracker

In this app is for club basketball :basketball: teams to keep track of each of their players stats and store it in a database.

https://clubbasketballstatstracker.cyclic.app/

<img width="944" alt="club_Basketball_landingpage1" src="https://user-images.githubusercontent.com/106325339/232938258-6c77dde8-7806-4e2f-9a1a-0e60866fabde.png">
<img width="948" alt="Club_Basketball_landingpage2" src="https://user-images.githubusercontent.com/106325339/232938277-4d1ed84b-994a-4c02-b881-4ce9922b6348.png">
<img width="194" alt="landing_page_mobile1" src="https://user-images.githubusercontent.com/106325339/232938338-92c1d34a-7be6-4ec9-a7f4-ea52cab13ba0.png">
<img width="193" alt="landing_page_mobile4" src="https://user-images.githubusercontent.com/106325339/232938378-0b3e5c24-a916-42a2-a5d9-8eca2e3e64ef.png">
<img width="194" alt="landing_page_mobile2" src="https://user-images.githubusercontent.com/106325339/232938388-93365731-daf1-4cfb-92e1-14312309206b.png">
<img width="194" alt="landing_page_mobile3" src="https://user-images.githubusercontent.com/106325339/232938407-e4deda60-199b-4b8c-9b69-34fe720d8fe9.png">
<img width="814" alt="log_in_page" src="https://user-images.githubusercontent.com/106325339/232938428-78262365-f0f4-4754-b647-702dcc1adf92.png">
<img width="817" alt="sign_up_page" src="https://user-images.githubusercontent.com/106325339/232938438-87ea8eec-1385-439a-817f-303882853d40.png">
<img width="828" alt="Screenshot 2023-04-18 174731" src="https://user-images.githubusercontent.com/106325339/232938650-d6adae52-abc2-443c-9aaf-c7b3105872ff.png">
<img width="822" alt="Screenshot 2023-04-18 174807" src="https://user-images.githubusercontent.com/106325339/232938670-46a7a9ba-17c3-4941-976e-0d7a56cfeaf2.png">
<img width="823" alt="Screenshot 2023-04-18 174851" src="https://user-images.githubusercontent.com/106325339/232938678-d9b493b1-37db-4499-8b11-ed8e7fdedb50.png">


# How to install:
Clone repo and install dependencies:
```highlight
npm install
```
to run :
```highlight
npm start
npm run css
```

# How it's made:

##Teck used:  Node.js, Express, EJS, Javascript, Passport, TailwindCSS, CSS, RESTAPIs

Used MVC structure to make the router, database (model), and controller code easier to read.
The page is rendered using EJS templating, styling with vanilla CSS for the landing page and TailwindCSS for the remainding pages. When the user loads the page their http request gets the login/sign up page as a response once the user is validated with passport their profile is rendered to the user. In the profile page user can see the stats chart for each player, in here the user can add new players by clicking into the players page and they can keep track the stats for each player during the game.
Instead of updatings each stat with a put request I have nested each +/- button in a form and used the post request with method-override middleware in order to change the post request value as a put request.

#Optimizations

This app was a ton of fun to create and plan on adding more things to optimize speed and performance :smirk:. For performance, adding an update button will be my next step and to optimize rending speed I'll be making the stats update buttons React components instead of updating as forms so only the buttons themselves will update on each user request instead of the whole page loading.

In order to create the Parallax effect on the landing page, a section with the class of "image" was added to all the sections that wrapped the content, this in turn was styled with the background-image & background-position property in CSS.

the ::before attribute was use to create the slanted look for each of the content sections. For the hero section the height of the pseudo element had to be narrow in order to avoid using the z-index. For the second wrapper section the z-index property was nessesary because the height of the ::before had to be long enough to cover the background on the right side of the section. Therefore the header had to be put in a higher z-index.
