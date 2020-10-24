$(document).ready(function () {
    $('.popup-video').click(function () {
        var src = $(this).attr('video-src');
        $('#video-pop-up .video-wrap').attr('src', src);
        $('#video-pop-up').modal('show');
    });

    $('#video-pop-up').on('hidden.bs.modal', function () {
        //clear src
        $('#video-pop-up .video-wrap').attr('src', '');
    });
});
