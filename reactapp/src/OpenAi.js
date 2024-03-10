


const openaiEndpoint = 'https://api.openai.com/v1/chat/completions';


async function sendMsgtoOpenAI(message, apiKey, stemplate) {
   
        const response = await fetch(openaiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{role:'system', content:`you are an resume making bot you will only return latex according to the given input and by modifying this template ${stemplate}. Make sure that you keep the font and the format the exact same. You will have to elaborate a lot, no matter how limited the amount text provided is, you will have to fill the whole page (at least 300 words should be there) with the given information write paragraphs especially in the experiencec section`},{ role: 'user', content: message }],
                // messages: [{role:'system', content:`give a short response.`},{ role: 'user', content: message }],
                max_tokens: 2000,
                
               
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
        
}


export { sendMsgtoOpenAI };
