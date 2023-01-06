const emojis = [];
const emojiName = document.querySelector('.main_description');
const btn = document.querySelector('.main_btn');

window.addEventListener('DOMContentLoaded', function () {
    getEmojis();
});

async function getEmojis() {
    const res = await fetch('https://emoji-api.com/emojis?access_key=5957a075dbd57c3e06e38c95f8af3c1777c5daba');
    const data = await res.json();
    const dataEmojis = data;

    for (let i = 0; i <= 500; i++) {
        emojis.push({
            description: dataEmojis[i].unicodeName,
            emoji: dataEmojis[i].character
        });
    };
};

btn.addEventListener('click', function () {
    const getRandonIndex = Math.floor(Math.random() * emojis.length)
    const selectedEmoji = emojis[getRandonIndex];

    btn.innerHTML = selectedEmoji.emoji;
    btn.style.fontSize = "150px"
    emojiName.style.fontSize = '25px'
    emojiName.innerHTML = 'Name: ' + selectedEmoji.description;
});