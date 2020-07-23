---
title: 'Using Airtable with Dialogflow to build a chatbot'
date: '2019-09-06'
---
## Dialogflow-Airtable Example
An example to demonstrate how you can use Airtable as the database for a dialogflow chatbot. The example chatbot can respond with the different Attractions available in Changi Airport based on the location. 

# Introduction
#### Airtable
If you haven’t already heard about it, Airtable combines the best of both a spreadsheet and a database. It provides an easy to use user interface to add/edit/delete data and also exposes an API for backend applications to query. Using Airtable saves a LOT of time (compared to writing SQL queries and hosting the database on server etc.). Apart from the time saving, another reason you might want to consider Airtable is that demands no special knowledge (like RDBMS / NoSQL / SQL) etc. to work with it; it can just be used like a spreadsheet. Ofcourse it has it's disadvantages compared to traditional databases like API hit limits, but it's good for a few use cases.

#### Dialogflow
You probably have heard of dialogflow if you’re reading this, but for the uninitiated, dialogflow provides an excellent NLP engine that takes care of the intent and parameter extraction from sentences. It also allows us to add a web hook that can make use of a backend server to respond dynamically.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Although if you want this to work with Google Assistant, you would have to deploy it on a live system or use a tool like ngrok to expose your local web server. 
See deployment for notes on how to deploy the project on a live system.

# Clone Repo
Go the [this github link](https://github.com/vishaag/dialogflow-airtable-example) and clone the example repository.

# Initial Setup

1. Dialogflow Setup
   1. Create an account or login in to [Dialogflow](https://dialogflow.com) and create a new agent with the name ```Changi-Attractions```
   2. Click on the agent settings (gear icon) and go to ```Export and Import``` tab and click on ```Import from ZIP```
   3. Select the ```Changi-Attractions.zip``` (in the Dialogflow folder) and import it into dialogflow
   4. Explore the the ```intents``` and ```entities``` tab
   
2. Create an account in Airtable and create a new workspace. Click on ```Add a base``` and ```import a spreadsheet```, import the .csv file (in the database folder) and name it ```Changi```.
3. Open the created base and you can see the sheet name as ```Imported table```. Change it to ```Attractions```.
3. Retrieve API keys from Airtable
   1. Account API key: 
   go to (https://airtable.com/account) and find your airtable account API key
   2. Database key: 
   go to (https://airtable.com/api) and select 'Changi' and find your base API key
4. Save these API keys as we would need them in the .env file later
   

# Installing

```
npm install
touch .env
```

* Now, open the .env file and paste the following

```
# Your Airtable API key. It'll look like key123asdf123asdf
AIRTABLE_API_KEY=

# Your newly created base ID. It'll look like app123asdf123asdf
AIRTABLE_ATTRACTIONS_ID=
```

* Paste the API keys we copied earlier into their respective places and save the file

# Running on local
```
node server.js
```
```
# if you want to set breakpoints and inspect the code
node --inspect server.js
```
You can now send POST requests to this server to debug and test how the code works. Although if you need to use it
with Google Assistant, you will need to deploy it on a live system.

# Deployment

#### 1️⃣ Step 1
__Option 1__  
Install a tunneling software like ngrok (https://ngrok.com/) to get a public URL for your localhost.

__Option 2 (Recommended)__  
A better option would be to deploy it on a real live server. One of the easiest way to do this would be
deploying it on glitch.  
* Make an account or login to [glitch](http://glitch.me)  
*  Go to [this glitch link](https://glitch.com/edit/#!/gaudy-coral) and click on ```Remix to edit``` so that you can clone this project to your account  
* Follow the Initial Setup section of this document and paste the API keys in the .env file in glitch. Note that the .env file is already present in glitch by default and you don't need to create a new one.

#### 2️⃣ Step 2
__Copy Webhook URL__  
* If you've used the ngrok method, copy the public url form the console.
* If you've used the glitch method, copy your live glitch link URL (by clicking on Show -> In a new window)
* Paste it into the the Webhook URL in your Dialowflow Agent Fulfulment Tab (instead of the ```https://gaudy-coral.glitch.me/```). The Dialogflow agent will now use your server on glitch as the backend. Make sure to save your changes.

<!-- Copy and Paste Me -->
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/gaudy-coral?path=.env&previewSize=0"
    title="gaudy-coral on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div> <br>

# Using it on Google Assistant

1.  In the right hand side of your Dialogflow agent page, you can find a a test area. Click on ```See how it works in Google Assistant```
This will open the google assistant console.
2.  Click on ```Talk to my app``` in the chatbot simulator to start chatting with your Changi Attractions Bot.
You can ask the following phrases : 
```
attractions near me
attractions near T2
attractions near terminal1
attractions near jewel
things to see in t2
```
Explore the Attraction intent in your Dialogflow agent to find what other phrases you can ask. You can also add more training phrases. Make sure you
tag the ```airport-location``` entity if you want to filter based on location.


### Demo
💃💃💃 Talk to the bot! 🕺🕺🕺  
![alt text][logo]

[logo]: https://cdn.glitch.com/b83fbab5-1da9-4904-9d90-9b27a994f32e%2Fchatbot-demo.gif?v=1567742893772 "Chatbot Demo"


## Links
* [Github Link](https://github.com/vishaag/dialogflow-airtable-example) - Project Github page
* [Glitch Project](https://glitch.com/edit/#!/gaudy-coral) - Example application running on glitch
* [Glitch](http://glitch.me) - Glitch website
* [Airtable](https://airtable.com) - Airtable website
* [Dialogflow](https://dialogflow.com) - Dialogflow website
* [SIA Assist Chatbot Link](https://github.com/vishaag/siaAssist) - Airport Assistant bot built by me and my team for cognitive systems class project. [Glitch Link](https://glitch.com/edit/#!/sia-assist)


                            
