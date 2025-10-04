// Get DOM elements
var chatBox = document.getElementById('chatBox');
var userInput = document.getElementById('userInput');
var sendBtn = document.getElementById('sendBtn');
var clearBtn = document.getElementById('clearBtn');

// Function to add a message to the chat
function addMessage(text, sender) {
  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);

  var bubbleDiv = document.createElement('div');
  bubbleDiv.classList.add('message-bubble');

  if (sender === 'bot') {
    bubbleDiv.textContent = '';
    messageDiv.appendChild(bubbleDiv);
    chatBox.appendChild(messageDiv);
    scrollToBottom();

    var charIndex = 0;
    var typeInterval = setInterval(function () {
      if (charIndex < text.length) {
        bubbleDiv.textContent += text.charAt(charIndex);
        charIndex++;
        scrollToBottom();
      } else {
        clearInterval(typeInterval);
      }
    }, 30);
  } else {
    bubbleDiv.textContent = text;
    messageDiv.appendChild(bubbleDiv);
    chatBox.appendChild(messageDiv);
    scrollToBottom();
  }
}

// Show typing indicator
function showTypingIndicator() {
  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'bot');
  messageDiv.id = 'typingIndicator';

  var bubbleDiv = document.createElement('div');
  bubbleDiv.classList.add('message-bubble', 'typing-indicator');

  for (var i = 0; i < 3; i++) {
    var dot = document.createElement('span');
    bubbleDiv.appendChild(dot);
  }

  messageDiv.appendChild(bubbleDiv);
  chatBox.appendChild(messageDiv);

  scrollToBottom();
}

// Remove typing indicator
function removeTypingIndicator() {
  var indicator = document.getElementById('typingIndicator');
  if (indicator) {
    indicator.remove();
  }
}

// Bot responses
function getBotResponse(userMessage) {
  var message = userMessage.toLowerCase().trim();

  if (message === 'hi' || message === 'hello' || message === "oye" || message === "sun" || message === "hn" || message === "hey") {
    return 'Hello! How can I help you today?';
  } else if (message === 'help') {
    return 'Sure! I can assist you with FAQs, contact info, or general questions.';
  } else if (message === 'bye') {
    return 'Goodbye! Have a great day!';
  }  else if(message=== "hey can you help me"){
    return "of course, tell me what help you need"
  }else if(message=== "hey mujhay fever hay"){
    return "plz consult a doctor immediately"
  }else if (message === "why" || message === "kiya" || message === "bolo na"){
  return "mes complete karo phr os ka jwab milay ga "
  }else if (message === "kaisa ho / how are you"){
    return "Mai bilkul theek hoon, aap sunao?"
  }
    else if  (message === "tumhara naam kya hai / your name"){
     return "Mera naam ChatBot Assistant hai 🤖"
    } else if ( message === "kya kar rahe ho / what are you doing"){
      return "Bas aap se baat kar raha hoon 😊"
    }else if (message === "weather / mausam kaisa hay / how is the weather"){
      return"Aaj ka mausam lagta hai thoda awesome hai 🌤️"
    }else if (message === "time / waqt kiya howa hay / what is your time "){
      return "Abhi ka time check kar lo apne device par ⏰"
    }else if (message === "thanks / shukriya"){
      return"Aapka bhi shukriya 🙏"
    }else if (message === "bye / khuda hafiz"){
      return "Khuda Hafiz! Apna khayal rakhna 🌙"
    }else if (message === "acha /okay"){
      return "Theek hay, khuch aur madad kar sakh ta ho "
    }
    else if (message === "joke / mazaak sunao"){
      return "Teacher: Tum late kyu aye? Student: Sir, Bike ka tire panchar ho gya tha😂"
    }else if (message === "bkl" || message === "bc" || message === "mc" || message === "lund" || message === "chutiya" || message ==="bsdk"){
      return "Gali nhi dey beta 😡 "
    }
    else {
      return "I'm sorry, I didn't understand that. Can you plz rephrase"
    }
}
  

// Handle sending messages
function sendMessage() {
  var message = userInput.value.trim();

  if (message === '') {
    alert("Please type a message first!");
    return;
  }

  // Add user message
  addMessage(message, 'user');

  // Clear input
  userInput.value = '';

  // Show typing...
  setTimeout(function () {
    showTypingIndicator();

    // Bot reply
    setTimeout(function () {
      removeTypingIndicator();
      var botResponse = getBotResponse(message);
      addMessage(botResponse, 'bot');
    }, 1500);
  }, 800);
}

// Scroll to bottom
function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Clear chat

function clearChat() {
  chatBox.innerHTML = '';
  addMessage("Hello! I'm your chatbot assistant. How can I help you today?", 'bot');
}
// Event listeners
sendBtn.onclick = sendMessage;

userInput.onkeypress = function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
};

clearBtn.onclick = clearChat;

// Initial bot greeting
window.onload = function () {
  setTimeout(function () {
    addMessage("Hello! I'm your chatbot assistant. How can I help you today?", 'bot');
  }, 1000);
};
