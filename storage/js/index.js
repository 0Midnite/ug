function openit(url) {
    const blanked = window.open('about:blank', '_blank');
    if (blanked) {
        const iframe = document.createElement('iframe');
        iframe.src = (window.location.origin + "/storage/games/" + url + "/index.html");
        iframe.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;";
        blanked.document.body.appendChild(iframe);
    }
}

// -------------------------

function aeae(url) {
    const blanked = window.open('about:blank', '_blank');
    if (blanked) {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;";
        blanked.document.body.appendChild(iframe);
    }
}

// -------------------------

function ischrome() {
    var userAgent = navigator.userAgent.toLowerCase();
    return userAgent.indexOf('chrome') > -1;
}
function chrome() {
    if (!ischrome()) {
        alert("this site only works on chrome")
        window.location.href = 'https://google.com/chrome';
    }
}
window.onload = chrome;

// -------------------------

document.addEventListener("mousedown", function() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    if (randomNum === 1) {
        window.open("https://www.highcpmrevenuegate.com/fag308325?key=a721cfba016e5a75613331ef54a856f3", "_blank");
    }
});
