var content = null
    , renderList = _.template("<ul>" +
    "<% for (var i in tours) { %>" +
    "<li><a onclick='loadItem(<%= tours[i].id %>)'><%= tours[i].name %></a></li>" +
    "<% } %>" +
    "</ul>")
    , renderItem = _.template("<h2><%= tour.name %></h2>" +
    "<p>From <%= tour.from %> to <%= tour.to %></p>" +
    "<p>Only for <%= tour.price %></p>" +
    "<button class='btn' onclick='loadList()'>Back to list</button>")
    , renderError = _.template("" +
    "<div class='text-error'>Error: <%= xhr.responseText %></div>" +
    "<button class='btn' onclick='loadList()'>Reload list</button>");

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function loadList() {
    loadJSON('/api/list'
        , function(json){
            content.innerHTML = renderList({tours: json})
        }
        , function(xhr) {
            content.innerHTML = renderError({xhr: xhr})
        })
}

function loadItem(tourId) {
    loadJSON('/api/item/'+tourId
        , function(json){
            content.innerHTML = renderItem({tour: json})
        }
        , function(xhr) {
            content.innerHTML = renderError({xhr: xhr})
        })
}

document.addEventListener("DOMContentLoaded", function(event) {
    content = document.getElementById('content');
    loadList();
    // We can use jQuery to find links and buttons and set click callbacks without global variables
    // we can set callbacks with addEventListener() and this will be 50% more lines
});