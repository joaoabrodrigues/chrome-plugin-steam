(function() {
    var span = document.querySelector(".queue_sub_text");

    if (!span) {
        span = document.querySelector(".finish_queue_text");
    }

    var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });

    if (span) {
        span.dispatchEvent(event);
    }
})();