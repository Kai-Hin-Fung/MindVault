// Add an event listener to the form with the ID 'video-form'. 
// This will trigger the function when the form is submitted.
document.getElementById('video-form').addEventListener('submit', function(event) {
    
    // Prevent the default form submission action.
    // This is done because we want to control the form submission with JavaScript.
    event.preventDefault();

    // Get the value of the input field with the ID 'url'.
    // This should contain the URL the user entered.
    var url = document.getElementById('url').value;

    // Send a POST request to the '/api/submit' endpoint on the server.
    // The body of the request is a JSON string containing the URL.
    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    })
    // When the server response is received, convert it from JSON to a JavaScript object.
    .then(response => response.json())
    // When the conversion is complete, display a success message to the user.
    .then(data => {
        document.getElementById('message').textContent = 'URL submitted successfully. Processing...';
    })
    // If there's an error at any point in the process, log it to the console.
    .catch((error) => {
        console.error('Error:', error);
    });
});
