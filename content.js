document.addEventListener('copy', () => {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        chrome.runtime.sendMessage({
            type: 'TEXT_COPIED',
            text: selectedText,
        });
    }
});