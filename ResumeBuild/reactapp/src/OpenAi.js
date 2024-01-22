


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
                messages: [{role:'system', content:`you are an resume making bot you will only return latex according to the given input and by modifying this template ${stemplate}`},{ role: 'user', content: message }],
                max_tokens: 100,
                
               
            })
        });
          
        const data = await response.json();
        return data.choices[0].message.content;
        
}


export { sendMsgtoOpenAI };
