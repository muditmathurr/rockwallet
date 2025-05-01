// Auto-resize textarea as user types
const messageInput = document.querySelector('.message-input');
messageInput.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
  
  // Reset height if empty
  if (this.value === '') {
    this.style.height = 'auto';
  }
});

// Simple send message functionality
const sendButton = document.querySelector('.send-button');
const messagesContainer = document.querySelector('.messages-container');

sendButton.addEventListener('click', function() {
  sendMessage();
});

// Allow sending with Enter key (but Shift+Enter for new line)
messageInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value.trim();
  
  if (message) {
    // Create user message
    addMessage(message, 'user');
    
    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto';
    
    // Simulate response (in a real app, this would be from the server)
    setTimeout(() => {
      const responses = [
        "I understand. How else can I help you with this?",
        "That's interesting! Can you tell me more about that?",
        "I appreciate your message. Is there anything specific you'd like to know?",
        "Thank you for sharing. Would you like me to elaborate on any particular aspect?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse, 'assistant');
    }, 1000);
  }
}

function addMessage(text, type) {
  // Create message element
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);
  
  // Create message content
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('message-content');
  
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  contentDiv.appendChild(paragraph);
  
  messageDiv.appendChild(contentDiv);
  
  // Add action buttons for assistant messages
  if (type === 'assistant') {
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('message-actions');
    
    // Copy button
    const copyButton = document.createElement('button');
    copyButton.classList.add('action-button');
    copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`;
    
    // Like button
    const likeButton = document.createElement('button');
    likeButton.classList.add('action-button');
    likeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`;
    
    actionsDiv.appendChild(copyButton);
    actionsDiv.appendChild(likeButton);
    
    messageDiv.appendChild(actionsDiv);
  }
  
  // Add to container and scroll to bottom
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Handle file upload button
const fileUpload = document.getElementById('file-upload');
fileUpload.addEventListener('change', function(e) {
  if (this.files && this.files[0]) {
    const file = this.files[0];
    
    // Only proceed if it's an image
    if (file.type.match('image.*')) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        // Create a message with the image
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user');
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '100%';
        img.style.borderRadius = '4px';
        img.style.marginBottom = '8px';
        
        contentDiv.appendChild(img);
        
        if (messageInput.value.trim()) {
          const paragraph = document.createElement('p');
          paragraph.textContent = messageInput.value.trim();
          contentDiv.appendChild(paragraph);
          messageInput.value = '';
          messageInput.style.height = 'auto';
        }
        
        messageDiv.appendChild(contentDiv);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Simulate response
        setTimeout(() => {
          const responses = [
            "Thanks for sharing this image. What would you like to know about it?",
            "I've received your image. What would you like me to help you with?",
            "Got the image! Do you have any specific questions about it?",
            "Your image has been uploaded. How can I assist you with it?"
          ];
          
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          addMessage(randomResponse, 'assistant');
        }, 1000);
      };
      
      reader.readAsDataURL(file);
    }
  }
});

// Mobile sidebar toggle
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');

menuButton.addEventListener('click', function() {
  sidebar.classList.toggle('expanded');
});

// Make conversation items clickable
const conversationItems = document.querySelectorAll('.conversation-item');
conversationItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove active class from all items
    conversationItems.forEach(i => i.classList.remove('active'));
    
    // Add active class to clicked item
    this.classList.add('active');
    
    // Update chat title
    const chatTitle = document.querySelector('.chat-title');
    chatTitle.textContent = this.querySelector('.conversation-name').textContent;
    
    // On mobile, collapse sidebar after selection
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('expanded');
    }
  });
});