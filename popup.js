document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTab();

    if (activeTab.url.includes("web.whatsapp")) {
        // lalala
    }
    else {
        const container = document.getElementsByClassName("container")[0];
        container.innerHTML = '<div class="title">Please open the whatsapp page.</div>';
    }
});

document.getElementById("flood").addEventListener("click", async e => {
    const activeTab = await getActiveTab();

    let message = document.getElementById("message").value;
    let amount = document.getElementById("amount").value;

    await chrome.tabs.sendMessage(activeTab.id, {
        action: 'flood',
        message: message,
        amount: amount
    });
})

async function getActiveTab() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });

    return tabs[0];
}