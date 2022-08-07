# Feedback UI React app

This is a feedback app project using a Javascript library called React to build the app interface.

You can check the DEMO here: https://peppy-unicorn-894eab.netlify.app/

## New Features: Json-server back-end
- It is a NPM package created for front-end developers to create a quick back-end for prototyping and mocking taking advantage of a full (fake) REST API.



## Features:
- Write reviews and select a number from 1 to 10 to rate the service/product.
- Real-time validation:
  - The review can`t be under 10 characters, otherwise a message will appear and the button Send will remain disabled.
- Editing review 
- Route to go to about page after clicking the ? icon, and route to go to main page if clicked on Feedback UI title  or back to home page button
- Average Rating
- Reviews counter

<img width="1000" alt="Screenshot 2022-08-03 at 13 04 29" src="https://user-images.githubusercontent.com/92530249/182606770-5d6c038e-f730-4d64-99de-b936bc30a709.png">
<img width="1000" alt="Screenshot 2022-08-03 at 13 27 41" src="https://user-images.githubusercontent.com/92530249/182607560-ab87853a-6c2c-4e92-a859-40afcfd06ba7.png">

<img width="1000" alt="Screenshot 2022-08-03 at 13 29 09" src="https://user-images.githubusercontent.com/92530249/182607871-7577c5a7-5367-41fc-a29d-050849b8832e.png">



## Concepts:
- Hooks (useState, useContext, useEffect)
- Context API ( managing Global State )
- Routes & Links 
- Components, Forms, Validation & Simple Animation using a package called Framer-motion
- Fetch data from a json-server 

## To run:
```
git clone git@github.com:lhpellizzon/feedback-UI.git
cd feedback-UI
npm install
npm run dev (to run both front-end and json-server mock back-end)
```
