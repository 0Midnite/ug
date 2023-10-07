function openit(url) {
    const blanked = window.open('about:blank', '_blank');
    if (blanked) {
        const iframe = document.createElement('iframe');
        iframe.src = (window.location.origin + "/storage/games/" + url + "/index.html");
        iframe.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;";
        blanked.document.body.appendChild(iframe);
    }
}

function aeae(url) {
    const blanked = window.open('about:blank', '_blank');
    if (blanked) {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;";
        blanked.document.body.appendChild(iframe);
    }
}

/*
const script = document.createElement('script');
script.src = "//pl20682025.highcpmrevenuegate.com/5e/2c/c0/5e2cc0ecd870e74151f1770e2c518631.js";
iframe.onload = function () {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const head = iframeDocument.head || iframeDocument.getElementsByTagName('head')[0];
    head.appendChild(script);
};
*/