(function(){
    var pageClicks = 0;
    addPageView();
    console.log(pageClicks);
    function addPageView(){
        pageClicks = pageClicks + 1;
    }
})();