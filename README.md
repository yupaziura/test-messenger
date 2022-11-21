# Messenger - test project

## Task 📋
1. When starting the application, the chat user should already have a static list of contacts, as well as a history of communication with some users.

2. When you select a contact from the contact list, the history of communication between users is automatically displayed. Each chat message must have the following attributes - message text, time and date of sending.

3. After selecting the interlocutor, the user has the opportunity to write a message in the chat and after sending it, he should receive an automatic response after 10-15 seconds with a notification. To generate an automatic response, you need to use the Chuck Norris API https://api.chucknorris.io/, namely, use the API method that generates random jokes. The value "value" should be the text of the automatic reply in the chat.

4. Implement a search among contacts. Functionally, the search should work in the same way as in any known messenger.

5. Saving message history after reloading the page.

6. Contacts with new messages should automatically move up.

7. The appearance of the chat page should be as close as possible to the following picture:

  ![image](https://user-images.githubusercontent.com/92332862/203046530-0a31b9ee-3c33-48e9-8676-5d85e6efedff.png)

8. It is preferable to write HTML/SCSS without using UI libraries.



## What was done ✅

 - create react app
 - create custom components
 - make components styles very similar to the example
 - create initial database with contacts and chat history
 - use rest api to get response with a joke
 - store response and sent messages in localStorage
 - only custom components and styles
 - SCSS usage
 
 ## What was not done ❌
 - adaptive design
 - login to messenger
