document.getElementById('chat-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const userInput = document.getElementById('user-input').value;
    const responseElement = document.getElementById('response');

    const apiKey = "AIzaSyB5wcC9wt6qJqM7q_ZsjWKrN14uQLHW22Q"; // Replace with your actual API key
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    const body = JSON.stringify({
        prompt: userInput,
        max_tokens: 150
    });

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: body
        });
        const data = await response.json();
        responseElement.textContent = data.choices[0].text;
    } catch (error) {
        responseElement.textContent = 'Error: ' + error.message;
    }
});
