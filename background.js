chrome.runtime.onMessage.addListener(message => {
    if (message.type === 'TEXT_COPIED') {
        chrome.storage.local.get(['copiedTexts'], (result) => {
            const current = result.copiedTexts || [];

            current.push({
                text: message.text,
            });
            
            chrome.storage.local.set({ copiedTexts: current }, () => {
                console.log('텍스트 저장 완료:', message.text);
            });
        });
    };
});