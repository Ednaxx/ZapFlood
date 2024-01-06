chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'flood') {
        flood(request.message, request.amount);
    }
});

async function flood(message, amount) {
    main = document.querySelector("#main");
    textarea = main.querySelector(`div[contenteditable="true"]`);

    if (!textarea) throw new Error("You must open a chat");

    for (let i = 0; i < amount; i++) {
        textarea.focus();
        document.execCommand('insertText', false, message);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);

        if(i !== amount - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
}
