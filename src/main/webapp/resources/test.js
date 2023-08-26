function handleSubmit(xhr, status, args, dialog) {
    var dialogId = dialog.id.replaceAll(":","\\\:");
    if (args.validationFailed) {
        $( "#"+dialogId ).effect( "shake", {times: 3}, 100 );
    } else {
        dialog.hide();
    }
}