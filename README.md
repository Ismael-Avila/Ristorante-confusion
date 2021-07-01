# Ristorante-confusion

![Ristorante-confusion](https://user-images.githubusercontent.com/72403273/124194699-abf36b80-da8e-11eb-9e57-45740f525e56.png)

# Overview
This is a single-page application (SPA) project developed in one of my courses from COURSERA. This work, cover many concepts about react such as class components, functional components, forms, redux and others. They are described in each commit done.
The single-page application was intended for a fictional restaurant in which you can see information about it, check the dishes, make comments on each dish and leave your experience (comment) about the restaurant. Also, the react application developed interacts with a json server.

# Requirements
To execute this repository you must to have installed node.js on your computer. See https://nodejs.org/en/.

# Running
To execute the files contained in this repository you follow the next steps.

1. Open a terminal inside of ***Ristorante-confusion*** folder and type ```sudo npm install``` and enter your credentials. This command will install all the node packages required to run the react application.
1. After of that, you need to get into ***json-server*** folder and again, open a new terminal and type this command ```json-server --watch db.json -p 3001 -d 2000```. This command means the json-server is going to set the db.json file as your database on which the react application is going to interact. -p 3001 specifies the port number where the application is going to listen and -d  describes the delay time that the server is going to take to dispatch the requests.
1. In the previous terminal opened in step 1, initialize the react application with the command ``` npm start```. Following you will be redirected to the single-page application developed.

# Deploying application
If you want to deploy this application to be uploaded into the cloud or locally into the json-server type the next command in the ***Ristorante-confusion*** folder: ```npm run build```. After that, you will need to wait until the node package manager finishes building your application.

You will have a new folder named ***build***, if you want to use a cloud service like google cloud, amazon or another, you must to read the documentation of your favorite service to upload the application into the cloud.

On the other hand, if you want to deploy this locally then, copy all the files stored in  the build folder into the next path ***json-server/public**** and inmediately run the command seen in the step 2 of Running section.

# Notes
To finish with the application type ***ctrl+c*** in your terminal, and if you want to have a nice view with the code, set your indentation to 2 units.
Happy codding :smile:.
