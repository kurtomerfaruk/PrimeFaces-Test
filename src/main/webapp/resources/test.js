function handleSubmit(xhr, status, args, dialog) {
    console.log("submit");
    var dialogId = dialog.id.replaceAll(":","\\\:");
    if (args.validationFailed) {
        $( "#"+dialogId ).effect( "shake", {times: 3}, 100 );
    } else {
        dialog.hide();
    }
}