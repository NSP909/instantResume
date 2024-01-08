const openaiEndpoint = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';

async function sendMsgtoOpenAI(message, apiKey) {
    const response = await fetch(openaiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            messages: [{ role: 'user', content: message }],
            model: 'gpt-3.5-turbo'
        })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    return data.choices[0].text;
}

module.exports = { sendMsgtoOpenAI };
