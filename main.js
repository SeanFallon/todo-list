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
         var addInput = '<input type="checkbox"> <br>'
         $("#div1").append($("#field").val() + addInput);
     });

    $(".remove").click(function(){
       $("#div1").remove();
    });
});