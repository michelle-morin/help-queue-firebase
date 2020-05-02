# Help Queue

#### React ticketing system
#### By: **Michelle Morin**, May 2, 2020 

## Description

This application is a ticketing system that allows students to request help from instructors, and allows instructors to determine the students' location in the classroom, the issue to be resolved, and the status of the help ticket. 

Example user stories:
* As a user, I should be able to create a new help ticket
* As a user, I should be able to view (read) all existing help tickets
* As a user, I should be able to view (read) details for a specific help ticket
* As a user, I should be able to update an existing help ticket
* As a user, I should be able to delete an existing help ticket

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following commands in Terminal:_
* ``/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``
* ``echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile``

_Install Git by entering the following command in Terminal:_
* ``brew install git``

_Next, install Node.js by entering the following command in Terminal:_
* ``brew install node``

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

#### Install this application

_Clone this repository by entering the following commands in Terminal (macOS) or PowerShell (Windows):_
* ``cd desktop``
* ``git clone https://github.com/michelle-morin/help-queue-firebase``
* ``cd help-queue-firebase``
_Confirm that you have navigated to the help-queue project directory (e.g., by entering ``pwd`` in Terminal (macOS) or PowerShell (Windows))._

_Next, install npm at the project's root directory by entering the following commands in Terminal (macOS) or PowerShell (Windows):_
* ``npm install``

_Open the contents of this repository in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code on macOS, enter the command ``code .`` in Terminal)._

_Next, creare a [Firebase project](https://firebase.google.com/) with a Firestore database. Create a .env file at the project's root directory and add the following to the .ev file, replacing the placeholder values with the value of each key from your own Firebase application:_
REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"

_To view this application in a web browser, enter the command ``npm start`` in the terminal._

## Technologies Used

* Git
* React
* Redux
* React-Redux
* JavaScript
* JSX
* npm
* Webpack
* Firebase
* Firestore database

### License

*MIT license*

Copyright &copy; 2020 **_Michelle Morin_**