// Pretend this is your backend / OpenAI call
export async function askCopilot(userText) {
  await new Promise(r => setTimeout(r, 1200));        // simulate latency
  return {
    answer: [
      {
        type: 'paragraph',
        text: 'Our standard refund policy does not allow for returns after 60 days of the purchase date.',
        ref: 1,
        tooltip: 'This is the company’s official refund rule.',
      },
      {
        type: 'paragraph',
        text: 'However, we recognise the need for flexibility in some situations. Refund requests for orders placed over 60 days ago may still be considered.',
        ref: 2,
        tooltip: 'Internal policy exception for special cases.',
      },
    ],
    sources: [
      'Processing a refund',
      'Refunding an order placed over 60 days ago',
      'Dealing with refund disputes',
    ],
  };
}
