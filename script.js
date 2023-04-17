const getBtn = document.getElementById('browser-btn');

function indicateBrowser() {
alert(navigator.appCodeName);
}

getBtn.addEventListener('click', indicateBrowser);