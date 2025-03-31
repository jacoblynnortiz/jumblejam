const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

function generateConfetti() {
    jsConfetti.addConfetti({
        confettiRadius: 5,
    }).then(() => jsConfetti.addConfetti())
}