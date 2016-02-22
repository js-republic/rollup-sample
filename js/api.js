export function getJson(url) {
    "use strict";
    return new Promise((resolve, reject)=> {
        const request = new XMLHttpRequest();
        request.open("GET", url);
        //request.setRequestHeader("Content-type", "application/json;charset=utf-8");
        request.onload = () => {
            if (request.status == 200) {
                resolve(JSON.parse(request.responseText));
            }
            else {
                reject(request);
            }
        };
        request.onerror = (e)=> reject(e);
        request.send();
    });
}

export function getText(url) {
    "use strict";
    return new Promise((resolve, reject)=> {
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.setRequestHeader("Content-type", "text/plain");
        request.onload = () => {
            if (request.status == 200) {
                resolve(request.responseText);
            }
            else {
                reject(request);
            }
        };
        request.onerror = (e)=> reject(e);
        request.send();
    });
}