document.addEventListener("DOMContentLoaded", function() {
    var chatContainer = document.getElementById("chat-container");
    var chatLogo = document.getElementById("chat-logo");
    var messageInput = document.getElementById("message-input");
    var sendButton = document.getElementById("send-button");
    var chatMessages = document.getElementById("chat-messages");

    function toggleChat() {
        chatContainer.classList.toggle("open");
    }

    function sendMessage() {
        var message = messageInput.value;

        if (message) {
            var messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = message;

            chatMessages.appendChild(messageElement);
            messageInput.value = "";
        }
    }

    chatLogo.addEventListener("click", function() {
        toggleChat();
    });

    sendButton.addEventListener("click", function() {
        sendMessage();
    });

    messageInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) { // 13 is the Enter key code
            sendMessage();
        }
    });
});
