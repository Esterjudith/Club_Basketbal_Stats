# Club basketball stats tracker

An app for club basketball :basketball: teams to keep track of each of their players stats and store it in a database.

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

Teck used:  Node.js, Express, EJS, Javascript, Passport, TailwindCSS, CSS, REST APIs
Notable Dependencies:

* connect-mongo (https://www.npmjs.com/package/connect-mongo)
   * Used to save cookie in database that allowed for user's session to persist.
* dotenv (https://www.npmjs.com/package/dotenv)
 * Intergration of .env file that allows protection and processing of environment variables.
* express-session (https://www.npmjs.com/package/express-session)
  * Middleware that aids formating of user session cookie data. Used in cooperation with 'connect-mongo' to store the session in the database.
* path (https://nodejs.org/api/path.html)
  * provides utilities for working with file and directory paths.
* mongoose (https://mongoosejs.com/)
  * Schema-based solution to model application data. Used to validate/organize database user and story entries.
* passport (https://www.passportjs.org/)
  * Authentication middleware for Node.js. Used to modularize the authentication process with OAuth and Google login.
* bcrypt (https://www.npmjs.com/package/bcrypt)
  * A library to help you hash passwords.
* Method-Override (http://expressjs.com/en/resources/middleware/method-override.html)
  * Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.


## Lessons Learned:
My biggest challenge was learning how to make the dashboard table responsive.  Once I realized that the mobile screen had to be layed out in a very different way than the desktop and worked on it small sections, I had it working perfectly. 


 
