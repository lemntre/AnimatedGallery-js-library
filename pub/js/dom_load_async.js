"use strict"

function logId(element) {
    console.log(element.id)
}

function AsyncDOMLoaded(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback)
    } else {
        callback()
    }
}

AsyncDOMLoaded(function() {
    console.log(document.querySelector('#myId'))
})