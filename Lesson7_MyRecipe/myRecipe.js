/*  
Program Name:   Recipe Display Application  
Author:  Shalise Franklin
Date:  12/4/18
Filename:   myRecipe.js 
*/ 

/* global  $  */ 

//displays the next element after the current target 
    function display(event) { 
    
        $(event.currentTarget).next().focusin("slow");
 
}//end of display 
    
//attach event listener to h3 elements to invoke display function when clicked 
    $("h3").click(display); 
    
//displays and animates the next element after the current target  
    function display2(event) { 
 
        $(event.currentTarget).next().animate( {width: 'toggle'}, "fast"); 
 
}//end of display2 

//attach event listener to h3 elements to invoke display function when clicked 
    $("h3").hover(display2); 

//change the background color h3 element when mouse clicks it  
    $("h3").click(function(){       
    }, function() {     
        $(this).css("background-color", "orange"); 
        
    } ); 

//slideDown() will trigger display2 method each time mouse slides down header 
    $("h3").slideDown(display2); 
 
