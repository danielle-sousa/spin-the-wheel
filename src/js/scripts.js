// Function to play the game and spin the wheel
function spinWheel(){
    document.getElementById('wheel').classList.add("wheel");
};

// Function to subscribe to posts
function submit() {
    document.getElementById('subscribe-form').classList.add("hidden");
    var name = document.getElementById('name').value;
    var subscribeMsgElement = document.getElementById('subscribe-message');
    subscribeMsgElement.classList.remove("hidden");
    subscribeMsgElement.innerHTML = 'Hi ' + name + ', your email has been registered. :)';
};

