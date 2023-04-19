const getBtn = document.getElementById('browser-btn');

function indicateBrowser() {
    const app = navigator.appVersion;
    if (app.match('Safari/605')){
        alert('You are using SAFARI browser');
    }
    if (app.match('OPR')){
        alert('You are using OPERA browser');
    }
    if (app.match('Chrome') && !app.match('OPR')){
        alert('You are using CHROME browser');
    }
  

//console.log(app)

}

getBtn.addEventListener('click', indicateBrowser);