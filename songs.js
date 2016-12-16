// -------variable to store the info from html----------
var outputDiv = document.getElementById("output-div");
// console.log("Test outputDiv", outputDiv);
// -------variable to store the info from html button----------
var buttonEl = document.getElementById('button');
// -------variable create an empty html var----------
var html = "";


// ____________________________________________
// -------intiate xhr request----------
var myRequest = new XMLHttpRequest();
// write list for person to go to store
myRequest.open("GET", "songList.json");
// okay, you go to grocery with this list
myRequest.send();
// wait to run function until JSON is loaded
myRequest.addEventListener("load", loadSongs);


// ____________________________________________
// -------function to load first batch of songs from first json upon page load----------
function loadSongs(XHRloadEvent) {
	//store parsed JSON
	var data = JSON.parse(XHRloadEvent.target.responseText);
	//story array of message
	var songList = data.songList;
	console.log("Test XHRloadEvent", data);
	//Loop through message array and build html strings
	outputSongs(songList);
	// Then output the html to the DOM
	outputDiv.innerHTML += html;

};


// ____________________________________________
// -------send for second json upon button click----------
buttonEl.addEventListener("click", function() {
	console.log("you clicked me!")

	// XHR request - initiate
	var myRequest2 = new XMLHttpRequest();
	// write list
	myRequest2.open("GET", "songsTwo.json");
	// send person to grocery
	myRequest2.send();
	// wait to run function until JSON is loaded
	myRequest2.addEventListener("load", loadMoreSongs);
});

// -------disable button after first click----------
document.getElementById("button").onclick = function() {
    //disable
    this.disabled = true;
}

// ____________________________________________
// -------function to add second batch of songs from second json file upon button click----------
function loadMoreSongs(XHRloadEvent) {
	var data = JSON.parse(XHRloadEvent.target.responseText);
	var songList = data.songList;
	//Loop through message array and build html strings
	outputSongs(songList);
	// Then output the html to the DOM
	outputDiv.innerHTML = html;
};


// ____________________________________________
// -------loop through and display songs from json----------
function outputSongs (list) {
	//looping through parsed JSON file
	for (var i = 0; i < list.length; i ++) {
		var currentSong = list[i];
		// console.log(songList[i]);
		// console.log(currentSong.sender + " says " + "'" + currentSong.message + "'")

		html += "<div id='messageDivs'>";
		html += "Artist: " + currentSong.artist + ",  ";
		html += "Album: " + currentSong.album + ",  ";
		html += "Song: " + currentSong.songName + " ";
		html += "</div>";
	};
};


// ____________________________________________


