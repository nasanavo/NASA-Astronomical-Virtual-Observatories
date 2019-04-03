// From http://tablesorter.com/docs/
   $(document).ready(function() {
      $("#collapsetableTop").hide();
      $("#collapsetableBottom").hide();

      // extend the default setting to always include the zebra widget. 
      //$.tablesorter.defaults.widgets = ['zebra']; 
 
      // call the tablesorter plugin
      $("#resourceTable").tablesorter({

	// sort on the first column and third column, order asc
	// sortList: [[0,0],[2,0]]

	// pass the headers argument and assigning a object 
	headers: { 
	   // assign the column (we start counting zero) 
	   4: { 
	      // disable it by setting the property sorter to false 
	      sorter: false 
	   }, 
	   // assign the column (we start counting zero) 
	   5: { 
	      // disable it by setting the property sorter to false 
	      sorter: false 
	   },
	   // assign the column (we start counting zero) 
	   6: { 
	      // disable it by setting the property sorter to false 
	      sorter: false 
	   } 
	}

      });

      $(".ajax-append").click(function() { 
         $.get("allmissions.html", function(html) { 
             // append the "ajax'd" data to the table body 
             //$("#resourceTable tbody").append(html); 
             $(".tablesorter").append(html); 
            // let the plugin know that we made a update 
            $("#resourceTable").trigger("update"); 
            // set sorting column and direction, this will sort on the first and third column 
            //var sorting = [[2,1],[0,0]]; 
            // sort on the first column 
            //$("#resourceTable").trigger("sorton",[sorting]); 
            //$("#resourceTable").trigger('applyWidgets'); 
         }); 
         $("#collapsetableTop").toggle();
         $("#expandtableBottom").hide();
         $("#expandtableTop").hide();
         $("#collapsetableBottom").toggle();
         return false; 
      }); 

   }); 
