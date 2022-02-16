# henge-vue

Creating a SPA called Henge. It's Hinge, but for druids. Right now this is just a SPA without authentication but hopefully we can add authentication later.

## functionality needed

* Be able to view druids
* Be able to filter druids by custom attributes 
- Currently: beard length, gods worshipped, favourite robe color, favourite ritual
* Be able to contact druids via contact form 
- Contact list preferably lets you know exactly who they were emailing
- Could pass a data property from li
* Be able to register as interested in druids
- This is just front-end right now but should be able to add user accounts behind auth later

## components

* Header
* Footer
* Homepage?
- Optional homepage to say 'what this is all about' just for fun
* Contact Page
* Contact Form
* Druid list
* Druid
////
### After auth added
* Messages

## store

* Druids
- ID
- First name
- Last name
- Picture
- Beard length
- Gods worshipped
- Favourite robe color
- Favourite ritual
- Bio
- ^^^ Putting this in a json file is probably best for data management
* Messages
- ID for who it is
- Messages should contain email address
- Text of message
### After auth added
- Login/Logout

## API?

After making the basic app it would be nice to migrate from store to an API with data hosted on Firebase

## Relevant Links

* https://stackoverflow.com/questions/48515023/display-different-vuejs-components-for-mobile-browsers
* https://www.youtube.com/watch?v=asb1aUuiWL8 <- using postgres to have persistent data