$(function () {
    $(".change-seen").on("click", function (event) {
        var id = $(this).data("id");
        var seenIt = $(this).data("seenIt");
        var seenItState = {
            seen: seenIt
        };

        $.ajax("/api/mustsee/" + id, {
            type: "PUT",
            data: seenItState
        }).then(
            function () {
                console.log("changed sleep to", seenIt);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newTvMovie = {
            name: $("#tvMovie").val().trim(),
            seen: false
        };
        $.ajax("/api/mustsee", {
            type: "POST",
            data: newTvMovie
        }).then(
            function () {
                console.log("created new this to watch");
                location.reload();
            }
        );
    });

    $(".delete-tvMovie").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/mustsee/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted show/movie", id);
                location.reload();
            }
        );
    });
});  