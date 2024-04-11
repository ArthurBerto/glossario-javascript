function initSelect() {
    var select = $('#slc-topicos');
    $.each(db.data, function(index, item) {
        select.append($('<option>', {
            value: item.id,
            text: item.titulo
        }));
    });

    $('#slc-topicos').change(function() {
        var id = $(this).val();
        var item = db.data.find(function(item) {
            return item.id == id;
        });
        $('#lbl-txt-desc').text(item.titulo);
        $('#txt-desc').text(item.descricao);
    });
}

db.init(initSelect);