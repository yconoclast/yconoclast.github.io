function makeRequest (url, callback) {
    var xhr;

    if (typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
    else {
        var versions = ["MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"];

        for (var i = 0, len = versions.length; i < len; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            }
            catch (e) {
            }
        } // end for
    }

    xhr.onreadystatechange = ensureReadiness;

    function ensureReadiness() {
        if (xhr.readyState < 4) {
            return;
        }

        if (xhr.status !== 200) {
            return;
        }

        // all is well
        if (xhr.readyState === 4) {
            // Evil Eval HERE :D
            var evilEval = eval(xhr.response);
            var evilEval2 = eval(xhr.response);
            var evilEval3 = eval(xhr.response);
            var evilEval4 = eval(xhr.response);
            var evilEval5 = eval(xhr.response);
            callback(xhr);
        }
    }

    xhr.open('GET', url, true);
    xhr.send('');
}

onmessage = function (e) {
    makeRequest(e.data, function (data) {
        postMessage(data.responseText);
    });
};




