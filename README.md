# FinalDegreeProject-2DAM

I am developing a mobile application that allows users to send instant notifications about their arrival at predefined destinations in a simple way and without the need to write messages.
Our application will have two main screens; the screen to register or log in and the screen where all the added contacts will be to whom said notifications will be sent.
Specifically speaking, the user will be able to:

- Register in the application with your email. Once registered you can log in to access all the functionality of the app. User administration will be done with Firebase.
- View the main screen of the app where you will find the option to add contacts up to a maximum of 6 people, although it is not mandatory to add 6. You can add as many as you want but without exceeding the maximum number of contacts allowed.
- Click on a specific contact to send them notification of your arrival at the chosen destination with a single touch, or click on the “notify everyone” option to send the same notification to all the contacts you have added to your app. You will hold down on a contact and some options will be displayed to select your destination and send the notification.
- Receive confirmation from the contact to whom you sent the notification.

![Captura de pantalla 2024-06-10 130852](https://github.com/marianetbai/FinalDegreeProject-2DAM/assets/101601819/f4f83d80-356a-4579-9a1b-0f3c1dc3bae7) ![image](https://github.com/marianetbai/FinalDegreeProject-2DAM/assets/101601819/0b9c2aab-edf6-4d35-b8b8-fb1e30d45db8)


This project will be developed in Visual Studio Code and Angular, Ionic and Firebase technologies will be used.
The development approach will be focused on event-based programming, since user interaction will be carried out through the components present in the graphical interface.
Since the available actions will depend on the user's profile, it will be necessary to implement sessions that control said profile to determine the allowed actions.
To do this, public variables and functions will be used that will be accessible from different components of the application. This will allow the transfer of information between screens and streamline the code by having a central form that contains shared functions and data.

It is crucial to keep in mind that the application is scalable, so the components that represent the database entities must be scalable as well. This means that some parts of the application will not be defined in its initial design, but will be generated dynamically at runtime based on stored data. For example, if you initially have a limited number of elements, such as users or contacts, but more will be added, it will be necessary to create the corresponding components dynamically to adapt to the changes.

When it comes to data storage, Firebase will be used as the main database to store registered users' information. Firebase will ensure data security and privacy, as well as provide advanced capabilities for user authentication and real-time data management. It is important to note that, unlike applications that use internal databases, in this project Firebase will be chosen to have a common database accessible from different devices. For communication with Firebase from the mobile application, the tools provided by Ionic and Angular will be used to ensure a fluid and efficient integration.

With these technologies and development strategies, it is expected to create a robust, adaptable and secure application that meets the project requirements and offers a satisfactory experience for users.
