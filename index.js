// code here
$(document).ready(() => {
    fetch('http://localhost:3000/shows')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                data.forEach(appendData);
            })
            .catch(function (err) {
                alert('error: ' + err);
            });
    
    function appendData(item) {
        let list = '<li id="'+item.id+'">'+item.title+'</li>'
        $('#list').append(list);
    }

    $(document).delegate('#list li', 'click', function() {
        $('#queued').append('<li>'+$(this).html()+'</li>');
    });

    $(document).delegate('#queued li', 'click', function(e) {
        $(e.target).remove();
    });

    $("#search-button").click(function () {
        searchKey = $('#search').val();
        $('#list li').each(function () {
            if ($(this).html().toLowerCase().indexOf(searchKey) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

});