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
         var addInput = '<li><input type="checkbox"> </li><br>'
         $(".ul1").append($("#field").val() + addInput);
     });

    $('input[type="checkbox"]').click(function(){
       $(this).parent().remove();
    });
});