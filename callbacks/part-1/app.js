let favNumber = 17;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
    console.log(data);
});

let favNumbers = [15, 9, 12];
$.getJSON(`${baseURL}/${favNumbers}?json`, function(data) {
    console.log(data);
});

let facts = [];
$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
        facts.push(data.text);
        $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
            facts.push(data.text);
            $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
                facts.push(data.text);
                facts.forEach(fact => {
                    $("body").append(`<p>${fact}</p>`);
                });
            });
        });
    });
});
