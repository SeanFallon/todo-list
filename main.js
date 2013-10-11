/**
 * Created with JetBrains WebStorm.
 * User: seanfallon
 * Date: 10/9/13
 * Time: 7:16 PM
 * To change this template use File | Settings | File Templates.
 */

// test

$(document).ready(function(){

     $(".add").click(function(){
         var addInput = '<li><input type="checkbox">' + $("#field").val() + '</li>'
         $(".ul1").append(addInput);
     });

    $(document).on("change",'input[type="checkbox"]',function(){      //input[type="checkbox"]
          //$(this).parent().remove()
       $('input[type="checkbox"]').each(function(){
                 $(this).parent().remove();
        });
    });
});