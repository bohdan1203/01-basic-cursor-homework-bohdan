document.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function playOnClick() {

    for (i = 0; i < document.getElementsByClassName('key').length; i++ ) {

        let keyId = document.getElementsByClassName('key')[i].getAttribute('id');
        let idNumber = keyId.replace('key-', '');

        document.querySelector(`#${keyId}`).addEventListener("click", function() {

            const audio = document.querySelector(`audio[data-key="${idNumber}"]`);
            const key = document.querySelector(`.key[data-key="${idNumber}"]`);

            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
        });
    };
};
playOnClick();

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
} ;

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));








