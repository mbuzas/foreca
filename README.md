## Welcome To Foreca Weather Forecast by Mantvydas

The project is made according to **JS application developer internship task**. Main purpose is to retrieve data from Foreca Weather API and visualize it using React. 
https://rapidapi.com/foreca-ltd-foreca-ltd-default/api/foreca-weather/
To start the project successfully you need to start both backend and frontend.

### Clone project
Clone project in your preffered location:
`git clone git@github.com:mbuzas/foreca.git`

### Start Frontend

Enter cloned project folder:
`cd foreca`

First install dependencies:
`npm i`

After that:
`npm start`
This might take a while for the first time.

This should start the app.

### Start Backend

In second terminal, project root folder enter:
`cd backend`

Then you need to install dependencies:
`npm i`

Finally, you can start backend
`npm start`

This should start backend node server for data logging both in local server and MongoDb.
[http://localhost:5000](http://localhost:5000)


### You successfully ran the app
The app is running in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
You can search for any city forecast in the world!
API expects at least 3 characters length query. Max query length - 30 chars. Only letters and numbers.
In browser console you can see response from MongoDb - the successful logging into Mongo collections (either keywords or current location data).
In backend console you can see logging of search queries and current location info.


