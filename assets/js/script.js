var channelID = 'UCM7vWpTSmnZB5ZpMdc44mNw';
$(document).ready(function(){
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",{
            part: 'contentDetails',
            id: channelID,
            key: 'AIzaSyAw8Q35GO2sRAu-QFJ98B7Q4dfF0Nb-zVg'},
            function(data){
                $.each(data.items,function(i,item){
                    console.log(item);
                    pid = item.contentDetails.relatedPlaylists.uploads;
                    getVideos(pid);
                })
            }
    );
    function getVideos(pid){
        $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems",{
                part: 'snippet',
                maxResults: 500,
                playlistId: pid,
                key: 'AIzaSyAw8Q35GO2sRAu-QFJ98B7Q4dfF0Nb-zVg'},
                function(data){
                    var output;
                    $.each(data.items,function(i,item){
                        console.log(item);
                        videoTitle = item.snippet.title;
                        videoId = item.snippet.resourceId.videoId;
                        output = '<li><iframe src =\"//www.youtube.com/embed/'+videoId+'\"</iframe></li>';
                        $('#Video_Results').append(output);
                    })
                }
        );
    }
});
