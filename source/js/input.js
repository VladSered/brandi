function check() {
    if ($('#input').val() != '')
        $('#button').removeAttr('disabled');
    else
        $('#button').attr('disabled','disable'); 
}   