var firstHeading = document.querySelector('h1');
firstHeading.innerHTML = "I changed my h1 heading!";

var allH2Tags = document.querySelectorAll('h2');
for(var i = 0; i < allH2Tags.length; i++) {
    allH2Tags[i].innerHTML = "And all my h2 headings!";
}

var phoneId = document.getElementById('phone');
phoneId.innerHTML = "Please don't call us –we sold out!";

var removeClass = document.getElementById('remove-class');
removeClass.classList.remove('location');

var locationClass = document.getElementsByClassName('location');
for(var i = 0; i < locationClass.length; i++) {
    locationClass[i].innerHTML = "The location class is located here.";
}

var newPElement = document.createElement('p');
var parentElement = document.getElementById('about-us');
parentElement.append(newPElement);
    
var pTag = document.getElementsByTagName('p');
for(var i = 0; i < pTag.length; i++) {
    pTag[i].innerHTML = "But who changed the text in all my p elements?";
}

var googleMap = document.getElementById('map');
googleMap.remove();

var newClass = document.querySelector('span');
newClass.classList.add('new-class');
var newMessage = document.getElementsByClassName('new-class');
for(var i = 0; i < newMessage.length; i++) {
    newMessage[i].innerHTML = 'Hello world! I\'m a new class.';
}

function toggleFunction() {
    var toggleClass = document.getElementById('toggle');
    toggleClass.classList.toggle('green');
    var toggleColour = document.getElementsByClassName('green');
    if(toggleColour.length > 0) {
        for(var i = 0; i < toggleColour.length; i++) {
            toggleColour[i].style.backgroundColor = 'green';
            toggleColour[i].style.color = 'white';
        }
    } else {
        toggleClass.style.backgroundColor = 'yellow';
        toggleClass.style.color = 'blue';
    }
}