const hoverSound = new Audio('assets/audio/hover.mp3');
const EnterBtnSound = new Audio('assets/audio/enterButton.mp3');
const selectSound = new Audio('assets/audio/select.mp3');
const clickSound = new Audio('assets/audio/click.mp3');

hoverSound.volume = 0.1;
EnterBtnSound.volume = 0.3;
selectSound.volume = 0.1;
clickSound.volume = 0.3;

/*===================INDEX.HTML====================*/
document.querySelectorAll('.key').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
  button.addEventListener('click', () => {
        clickSound.currentTime = 0; // връща към началото
        clickSound.play();
    });

    button.addEventListener('touchstart', () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

document.querySelectorAll('.enterBtn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    EnterBtnSound.currentTime = 0;
    EnterBtnSound.play();
  });
});

/*===================MENU.HTML====================*/
document.querySelectorAll('.menuBtn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

/*===================LETTER.HTML====================*/
document.querySelectorAll('.yesBtn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

document.querySelectorAll('.noBtn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    EnterBtnSound.currentTime = 0;
    EnterBtnSound.play();
  });
});

/*===================BACK BUTTONS====================*/

document.querySelectorAll('.backBtn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

/*===================SELECT BUTTONS====================*/
document.querySelectorAll('.videoCard').forEach(button => {
  button.addEventListener('mouseenter', () => {
    selectSound.currentTime = 0;
    selectSound.play();
  });
});

document.querySelectorAll('.videoCard').forEach(button => {
  button.addEventListener('mouseenter', () => {
    selectSound.currentTime = 0;
    selectSound.play();
  });
});

document.querySelectorAll('.photo').forEach(button => {
  button.addEventListener('mouseenter', () => {
    selectSound.currentTime = 0;
    selectSound.play();
  });
});

document.querySelectorAll('.retryLink').forEach(link=> {
  link.addEventListener('mouseenter', () => {
    EnterBtnSound.currentTime = 0;
    EnterBtnSound.play();
  });
});

