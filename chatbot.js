// Function to send user message
function sendMessage() {
  var userInput = document.getElementById('userInput').value;
  var chatArea = document.getElementById('chatArea');
  var userMessageElement = document.createElement('div');
  userMessageElement.textContent = userInput;
  userMessageElement.classList.add('user-message');
  chatArea.appendChild(userMessageElement);

  // Call function to handle bot response
  handleBotResponse(userInput);

  // Clear input field after sending message
  document.getElementById('userInput').value = '';
}

// Function to handle bot response
function handleBotResponse(userInput) {
  // Here you can add logic to generate a response based on user input
  // For simplicity, let's just echo the user's input for now
  var chatArea = document.getElementById('chatArea');
  var botMessageElement = document.createElement('div');
  botMessageElement.textContent = "Bot: " + userInput;
  botMessageElement.classList.add('bot-message');
  chatArea.appendChild(botMessageElement);

  // Scroll chat area to bottom after adding new message
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Toggle chatbot visibility
document.getElementById('header').addEventListener('click', function() {
  var chatbot = document.getElementById('chatbot');
  chatbot.classList.toggle('expanded');
});


// ChatBot

// Function to handle bot response
function handleBotResponse(userInput) {
  var chatArea = document.getElementById('chatArea');
  var botMessageElement = document.createElement('div');

  // console.log("Hello! Welcome to LuxScape Auto. How can I assist you today?"));

  // Analyze user input and generate personalized responses
  switch (userInput.toLowerCase()) {
    case 'hello':
    case 'hi':
      botMessageElement.textContent = "Bot: Hi there! How can I assist you today?";
      break;
    case 'how are you?':
      botMessageElement.textContent = "Bot: I'm just a bot, but thanks for asking!";
      break;
    case 'bye':
    case 'goodbye':
      botMessageElement.textContent = "Bot: Goodbye! Have a great day!";
      break;
      
    case 'lexus':
    case 'gx 550':
    case 'gx550':
    case 'lexus gx 550':
    case 'lexus gx550':
    case 'lexus gx':
    case 'gx':
    case '550':
      botMessageElement.textContent = "Bot: Here's some information about Lexus: The Lexus GX 550 epitomizes the epitome of luxury and performance. With its commanding presence on the road, this SUV offers a blend of refinement and ruggedness. Underneath its sleek exterior lies a powerful engine that delivers exhilarating performance both on and off the pavement. Inside, the GX 550 boasts a sumptuous interior adorned with premium materials and cutting-edge technology, ensuring a comfortable and connected driving experience. Whether cruising through urban streets or exploring rough terrains, the Lexus GX 550 stands as a symbol of elegance and capability, redefining the standards of luxury SUVs.";
      break;

    case 'chevy':
    case 'suburban':
    case 'chevy suburban':
    case 'suburban chevy':
      botMessageElement.textContent = "Bot: Here's some information about Chevy: The Chevy Suburban is an icon in the world of full-size SUVs, renowned for its spaciousness, versatility, and durability. With its bold and imposing exterior design, the Suburban makes a statement wherever it goes. Inside, its cavernous cabin provides ample seating for passengers and generous cargo space, making it the ideal vehicle for family road trips or hauling large loads. Equipped with advanced safety features and innovative technology, the Suburban offers both peace of mind and entertainment on every journey. From daily commutes to cross-country adventures, the Chevy Suburban is the epitome of reliability and functionality.";
      break;

    case 'cadilac':
    case 'escalade':
    case 'cadilac escalade':
      botMessageElement.textContent = "Bot: Here's some information about Cadilac: The Cadillac Escalade is the epitome of luxury in the world of SUVs. With its distinctive design, refined interior, and powerful performance, the Escalade exudes elegance and sophistication. From its bold grille to its sleek lines, every detail of the Escalade is crafted with precision and attention to detail. Inside, the Escalade offers a spacious and opulent cabin, equipped with state-of-the-art technology and premium amenities. Whether cruising down city streets or embarking on long journeys, the Cadillac Escalade delivers a driving experience that is both indulgent and exhilarating, setting the standard for luxury SUVs.";
      break;

    case 'bmw':
    case 'bmw x7':
    case 'x7':
    case 'x7 bmw':
      botMessageElement.textContent = "Bot: Here's some information about BMW: The BMW X7 is a flagship SUV that embodies the essence of luxury and performance. With its bold design, spacious interior, and advanced technology, the X7 offers a seamless blend of comfort and capability. From its iconic kidney grille to its sleek silhouette, every aspect of the X7 is meticulously crafted to create a commanding presence on the road. Inside, the X7 provides a luxurious and serene environment, with premium materials and state-of-the-art amenities that elevate the driving experience. With powerful engines and agile handling, the X7 delivers exhilarating performance and confidence-inspiring dynamics, making it the ultimate expression of luxury and refinement.";
      break;

    case 'mercedes':
    case 'gls':
    case 'benz':
    case 'mercedes gls':
    case 'mercedes benz gls':
    case 'mercedes benz':
    case 'gls benz':
    case 'gls mercedes':
    case 'mercedes-benz gls':
    case 'mercedes-benz':
      botMessageElement.textContent = "Bot: Here's some information about Mercedes-Benz: The Mercedes-Benz GLS is a testament to luxury and innovation, combining exquisite craftsmanship with cutting-edge technology. With its striking exterior design and refined styling cues, the GLS commands attention on the road. Inside, the GLS offers a serene and luxurious environment, with premium materials and advanced features that cater to every need and desire. Equipped with powerful engines and dynamic handling capabilities, the GLS delivers a smooth and exhilarating driving experience. Whether transporting passengers in comfort or tackling challenging terrain with confidence, the Mercedes-Benz GLS redefines the luxury SUV segment.";
      break;

    case 'the price':
    case 'the rental price':
    case 'price':
    case 'rental price':
    case 'the rental':
    case 'the price of':
    case 'the price?':
    case 'the rental price?':
    case 'price?':
    case 'rental price?':
    case 'the rental?':
    case 'the price of?':

      botMessageElement.textContent = "Bot: The price of the vehicles are listed on the bottom left quartile of site."
      break;
      
    default:
      botMessageElement.textContent = "Bot: I'm sorry, I didn't understand. Can you please rephrase?";
  }

  botMessageElement.classList.add('bot-message');
  chatArea.appendChild(botMessageElement);
}
