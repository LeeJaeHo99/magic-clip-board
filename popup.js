chrome.storage.local.get(['copiedTexts'], (result) => {
    const list = result.copiedTexts || [];
    const recentList = list.slice(-5);
    const container = document.getElementById('clipboardList');
    container.innerHTML = '';

    recentList.reverse().forEach(entry => {
        const div = document.createElement('div');
        div.className = 'box';
        div.textContent = `${entry.text}`;

        div.addEventListener('click', function () {
            navigator.clipboard.writeText(this.textContent)
                .then(() => {
                    this.style.backgroundColor = '#eee';
                    this.style.color = '#000';
                    setTimeout(() => {
                        this.style.backgroundColor = '';
                        this.style.color = '';
                    }, 200);
                });
        });

        container.appendChild(div);
    });

    document.addEventListener('keydown', function (e) {
        if (e.shiftKey) {
            const keyCode = e.code;
            const match = keyCode.match(/^Digit([1-5])$/);
    
            if (match) {
                const keyNum = parseInt(match[1]);
                const boxes = document.querySelectorAll('.box');
                const targetBox = boxes[keyNum - 1];
    
                if (targetBox) {
                    navigator.clipboard.writeText(targetBox.textContent)
                        .then(() => {
                            targetBox.style.backgroundColor = '#eee';
                            targetBox.style.color = '#000';
                            setTimeout(() => {
                                targetBox.style.backgroundColor = '';
                                targetBox.style.color = '';
                            }, 200);
                        })
                        .catch(err => {
                            console.error('텍스트 복사 실패:', err);
                        });
                }
            }
        }
    });
    
});


// document.addEventListener('keydown', function (e) {
//     if (e.shiftKey) {
//         const keyNum = parseInt(e.key);
        
//         if (!isNaN(keyNum) && keyNum >= 1 && keyNum <= 5) {
//             const boxes = document.querySelectorAll('.box');
//             const targetBox = boxes[keyNum - 1];

//             if (targetBox) {
//                 navigator.clipboard.writeText(targetBox.textContent)
//                     .then(() => {
//                         targetBox.style.backgroundColor = '#eee';
//                         setTimeout(() => {
//                             targetBox.style.backgroundColor = '';
//                         }, 200);
//                     })
//                     .catch(err => {
//                         console.error('텍스트 복사 실패:', err);
//                     });
//             }
//         }
//     }
// });