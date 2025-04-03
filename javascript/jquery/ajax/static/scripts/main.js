
$(function () {
    var $orders = $("#orders");

    $.ajax({
        type:"GET",
        url: "/api/data",
        success: function (data) {
            $.each(data, function (i, item) {
                add_order(item);
            })
        }
    })


    var $add_button = $("#add-button");
    var $name = $("#name");
    var $drink = $("#drink");

    $add_button.on("click", function () {
        var data = {
            name: $name.val(),
            drink: $drink.val()
        };

        $.ajax({
            type:"POST",
            url: "/api/data",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: add_order,
            error: function () {
                console.log("error response from server.")
            }
        });
    })


    $orders.on("click", ".remove-button", function () {
        $.ajax({
            type: "DELETE",
            url: "/api/data/" + $(this).attr("data-id"),
            success: function (data) {

                // .find会查找当前节点的子节点, 而非根据条件过滤当前节点
                $li_to_remove = $(".remove-button[data-id=" + data.id + "]").closest("li");
                $li_to_remove.fadeOut(300, function () {
                    $(this).remove();
                })
            }
        })

    })

    var orderTemplate = $("template.order").html();
    function add_order(order) {
        $orders.append(Mustache.render(orderTemplate, order));
    }


    $orders.on("click", ".edit-button", function () {
        var $li = $(this).closest("li");
        var name = $li.find("span.name").text();
        var drink = $li.find("span.drink").text();
        $li.addClass("edit");
        $li.find("input.name").val(name);
        $li.find("input.drink").val(drink);
    })


    $orders.on("click", ".save-button", function () {
        var $li = $(this).closest("li");

        var data = {
            name: $li.find("input.name").val(),
            drink: $li.find("input.drink").val()
        }

        $.ajax({
            type: "PUT",
            url: "/api/data/" + $li.attr("data-id"),
            contentType: "application/json",
            data:JSON.stringify(data),
            success: function (item) {
                $li.find("span.name").text(item.name);
                $li.find("span.drink").text(item.drink);
                $li.removeClass("edit");
            },
            error: function () {    
                console.log("error updating order.");
            }
        })

    })


    $orders.on("click", ".cancel-button", function () {
        $(this).closest("li").removeClass("edit");
    })
})



