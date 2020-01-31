(function ($) {
    AddTableRow = function () {

        var newRow = $("<tr>");
        var cols = "";

        cols += '<td width="10%"><input class="form-control" type="number" id="quant" min="1" onmouseup="calcular()"></td>';
        cols += '<td width="70%"><input class="form-control" type="text" id="prod"></td>';
        cols += '<td width="10%"><input class="form-control" type="tel" id="vu" onkeyup="calcular()" onkeyup="add()"></td>';
        cols += '<td width="10%"><input class="form-control" type="text" id="vt" onkeyup="calcular()"></td>';
        cols += '<td><button type="button" onclick="remove(this)">Excluir</button></td>';



        newRow.append(cols);
        $("#produto").append(newRow);

        return false;
    };
})(jQuery);
(function ($) {
    remove = function (item) {
        var tr = $(item).closest('tr');

        tr.fadeOut(400, function () {
            tr.remove();
        });

        return false;
    }
})(jQuery);
function calcular() {
    quant = document.getElementById("quant").value;
    vu = document.getElementById("vu").value;
    vt = (quant * vu);
    document.getElementById("vt").value = vt;
}
