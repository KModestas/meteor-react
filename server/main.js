import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';

// Importing imports/api/tasks.js on the server creates the MongoDB collection and sets up the plumbing to get the data to the client.
Meteor.startup(() => {
	// code to run on server at startup
});
