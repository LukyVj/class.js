// class.js 
// Author : @LukyVj
// Version : 0.0.1
// Date : Wednesday, October 1, 2014

$(function(){
  
  // Target all the elements
  var el = $('*');

  // For each 
   el.each(function(){
     var $this = $(this);
     
     // Get the existant class if they exists
     var prevClass = $this.attr('class'); 
     
     // And get the tag name property, and lowercase it
     var nm = $this.prop("tagName").toLowerCase();
     
     // If the element ($this) don't have class, add the one
     // If you remove this conditional statement: prevClass = undefined
     if(!$this.attr('class')){
       $this.attr('class', nm)
     } 
     // If a class exist, keep it, and add the new one
     else{
       $this.attr('class', prevClass + ' ' + nm )
     }
   })
  
}); 
