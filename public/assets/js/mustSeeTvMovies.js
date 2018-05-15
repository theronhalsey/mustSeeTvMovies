$(function () {
    $(".change-seen").on("click", function (event) {
        var id = $(this).data("id");
        var newseen = $(this).data("newseen");
        var newseenState = {
            seen: newseen
        };

        $.ajax("/api/mustsee/" + id, {
            type: "PUT",
            data: newseenState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newTvMovie = {
            name: $("#tvMovie").val().trim(),
            seen: $("[name=seen]:checked").val().trim()
        };
        $.ajax("/api/mustsee", {
            type: "POST",
            data: newTvMovie
        }).then(
            function () {
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
                location.reload();
            }
        );
    });
});  