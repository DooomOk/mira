let clickCount = 0; 

document.getElementById('continue-btn').addEventListener('click', function() {
    let textElement = document.getElementById('text');
    let continueBtn = document.getElementById('continue-btn');
    let choiceButtons = document.getElementById('choice-buttons');


    clickCount++;

    if (clickCount === 1) {
        textElement.innerHTML = "<span class='smaller-text'>I've been thinking about this a lot lately, but I'm not really sure how to ask. Should I go to your house and ask for your family's approval? I’m too shy to ask because I feel like I don't have anything to show your family. I'm broke right now and don't have much to offer yet... though I do have a job now, so I think I'll get there soon, haha.</span>";
    } else if (clickCount === 2) {
        textElement.innerHTML = "<span class='smaller-text'>I really like you. I like your eyes, your smile, your voice. I like everything about you. You make me feel something I never thought was possible. You make me feel warm, safe, and important. You make me feel like I can take on anything the world throws at me. I’ve never felt like this before, so, uhmm...</span>";
    } else if (clickCount === 3) {
        textElement.innerText = "pede baq manligaw lods,,,??";
        continueBtn.classList.add('hidden');
        choiceButtons.classList.remove('hidden');
    }
});

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('text').innerText = "Yay! I'm so happy hihihi";
    document.getElementById('choice-buttons').classList.add('hidden');

    showConfetti();
    document.getElementById('left-gif').classList.remove('hidden');    
    document.getElementById('right-gif').classList.remove('hidden');    


    let randomImages = document.querySelectorAll('.random-image');
    randomImages.forEach(image => {
        image.remove();
    });
});

document.getElementById('no-btn').addEventListener('click', function() {
    let noBtn = document.getElementById('no-btn');
    let yesBtn = document.getElementById('yes-btn');

    noBtn.style.transform = `scale(${parseFloat(noBtn.style.transform.replace('scale(', '').replace(')', '')) - 0.1 || 0.9})`;
    yesBtn.style.transform = `scale(${parseFloat(yesBtn.style.transform.replace('scale(', '').replace(')', '')) + 0.1 || 1.1})`;

    let scaleValue = parseFloat(noBtn.style.transform.match(/[\d.]+/)[0]);
    if (scaleValue <= 0.2) {
        noBtn.classList.add('hidden');
        yesBtn.style.transform = "scale(1.5)";
    } else {
        createImageAroundPage();
    }
});

function showConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');

    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDelay = Math.random() * 5 + 's';
        confettiContainer.appendChild(confettiPiece);
    }
}

function createImageAroundPage() {
    let images = [
        'sad-1.jpg', 
        'sad-2.jpg', 
        'sad-3.jpg',  
    ];
    
    let img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add('random-image'); 
    img.style.position = 'absolute';
    img.style.top = Math.random() * 100 + 'vh';
    img.style.left = Math.random() * 100 + 'vw';
    img.style.width = Math.random() * (230 - 150) + 150 + 'px'; 
    img.style.height = 'auto'; 
    document.body.appendChild(img);
}
