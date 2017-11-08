for (var i = 0; i < 21; ++i) {



    
        var ricxvi = true;
    



        for(var j = 2; j <= Math.round(i/2); ++j){


            if ( i % j == 0){


                ricxvi = false;


            }
        }


    
        if (ricxvi) {

            document.write(i);
        }
        
    }
    