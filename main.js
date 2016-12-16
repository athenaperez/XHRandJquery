var outputDiv = document.getElementById("output-div");
console.log("Test outputDiv", outputDiv);
var buttonEl = document.getElementById('button');
	var html = "";


// ________________________________________
// XHR request - initiate
var myRequest = new XMLHttpRequest();
// write list
myRequest.open("GET", "messages.json");
// send person to grocery
myRequest.send();
// wait to run function until JSON is loaded
myRequest.addEventListener("load", loadMessages);


// ________________________________________
function loadMessages(XHRloadEvent) {
	//store parsed JSON
	var data = JSON.parse(XHRloadEvent.target.responseText);
	//story array of message
	var messageList = data.messages;
	console.log("Test XHRloadEvent", data);

	//Loop through message array and build html strings
	outputMessages(messageList);
	// Then output the html to the DOM
	outputDiv.innerHTML += html;

};


// ________________________________________
buttonEl.addEventListener("click", function() {
	// console.log("you clicked me!")

	// XHR request - initiate
	var myRequest2 = new XMLHttpRequest();
	// write list
	myRequest2.open("GET", "messagesTwo.json");
	// send person to grocery
	myRequest2.send();
	// wait to run function until JSON is loaded
	myRequest2.addEventListener("load", loadMoreMessages);


});


// ________________________________________
function loadMoreMessages(XHRloadEvent) {
	var data = JSON.parse(XHRloadEvent.target.responseText);
	var messageList = data.messages;
	//Loop through message array and build html strings
	outputMessages(messageList);
	// Then output the html to the DOM
	outputDiv.innerHTML = html;
};


// ________________________________________
function outputMessages (list) {
	//looping through parsed JSON file
	for (var i = 0; i < list.length; i ++) {
		var currentMessage = list[i];
		// console.log(messageList[i]);
		// console.log(currentMessage.sender + " says " + "'" + currentMessage.message + "'")

		html += "<div id='messageDivs'>";
		html += currentMessage.sender + " says: ";
		html += currentMessage.message;
		html += "</div>";
	};
};

