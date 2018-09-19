$( document ).ready(function () {

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
    url += '?' + $.param({
        'api-key': "73ba5df512e94dfbaae9735a005a7bd7",
        'q': "atlanta",
        'begin_date': "20180618",
        'end_date': "20180918",
        'sort': "newest"
    });



    function getArticles() {

        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            
            for (i = 0; i < result.response.docs.length; i++) {
                var index = i;
                var headline = result.response.docs[i].headline.main;
                var author = result.response.docs[i].byline.original;

                console.log(index);
                console.log(headline);
                console.log(author);
            }
    
        }).fail(function(err) {
            throw err;
        });
    
    }

    getArticles();
    
});