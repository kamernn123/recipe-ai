function sendMessage(text) {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += '<div class = "message user">${text}</div>';

    //connect python backend
    console.log("Sending to AI: ", text);
}

function handleSend() {
    const input = document.getElementById('user-input');
    if(input.value.trim() !== "") {
        sendMessage(input.value);
        input.value = "";
    }
}