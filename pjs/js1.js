
  $(document).ready( function() {                

            /* $(selector).hover( inFunction, outFunction ) */
            $('.dropdown1').hover( 
                function() {                        
                    $(this).find('#d2').css({
                        "display": "block",
                        "margin-top": 0
                    });                        
                }, 
                function() {                        
                    $(this).find('#d2').css({
                        "display": "none",
                        "margin-top": 0
                    });                        
                } ,

            );
             $('.dropdown1').hover( 
                function() {                        
                    $(this).find('#d1').css({
                        "display": "block",
                        "margin-top": 0
                    });                        
                }, 
                function() {                        
                    $(this).find('#d1').css({
                        "display": "none",
                        "margin-top": 0
                    });                        
                } ,

            );
              $('.dropleft ').hover( 
                function() {                        
                    $(this).find('#d2_s').css({
                        "display": "block",
                        "margin-top": 0
                    });                        
                }, 
                function() {                        
                    $(this).find('#d2_s').css({
                        "display": "none",
                        "margin-top": 0
                    });                        
                } ,

            );

        });