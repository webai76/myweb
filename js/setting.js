jQuery(document).ready(function($) {
 
 var $data = $(".portfolio").clone();
 var $filteredData2 = $data.find('.item-thumbs');

 $(".portfolio").quicksand($filteredData2, {
                duration: 200,
                adjustHeight: 'auto' + '200px'
            }, function() {


                $(".fancybox").fancybox({
                    padding: 0,
                    beforeShow: function() {
                        this.title = $(this.element).attr('title');
                        this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
                    },
                    helpers: {
                        title: {
                            type: 'inside'
                        },
                    }
                });


            });
   

        // Clone applications to get a second collection
        //var $data = $(".portfolio").clone();

        //NOTE: Only filter on the main portfolio page, not on the subcategory pages
        $('.filtera li').click(function(e) {


            $(".filtera li").removeClass("active");
            // Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
            var filterClass = $(this).attr('class').split(' ').slice(-1)[0];

            if (filterClass == 'all') {
                var $filteredData = $data.find('.item-thumbs');
            } else {
                var $filteredData = $data.find('.item-thumbs[data-type=' + filterClass + ']');
            }

            $(".portfolio").quicksand($filteredData, {
                duration: 200,
                adjustHeight: 'auto'+ '200px'
            }, function() {


                $(".fancybox").fancybox({
                    padding: 0,
                    beforeShow: function() {
                        this.title = $(this.element).attr('title');
                        this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
                    },
                    helpers: {
                        title: {
                            type: 'inside'
                        },
                    }
                });


            });

            $(this).addClass("active");
            return false;
        });



});