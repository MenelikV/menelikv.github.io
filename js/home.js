$(document).ready(function(){
    // Label animation on Contact Form
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
    // Modal id and attributes handling
    $(".modal").on("show.bs.modal", function(){
        var $this = $(this)
        var modal_number = $(".modal").length
        console.log($this.data("id"))
        var left = $this.find(".nav-left")
        var right = $this.find(".nav-right")
        left.data("id", ($this.data("id") - 1)%modal_number)
        left.data("modal-id", this.id)
        right.data("id", ($this.data("id") + 1)%modal_number)
        right.data("modal-id", this.id)
    })
    var id_handler = function(o){
        var $this = $(o)
        var id = $this.data("id")
        var modal_id = $this.data("modal-id")
        $(`[data-id='${id}']`).modal("toggle")
        $(`#${modal_id}`).modal("toggle")
    }
    // Modal Animation
    $(".nav-left").click(function(){
        id_handler(this)
    })
    $(".nav-right").click(function(){
        id_handler(this)
    })
})