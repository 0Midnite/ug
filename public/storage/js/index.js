function ab(url) {
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