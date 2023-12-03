$(document).ready(function(){

    let txtArea = $('#txtarea');
    let addRan = $('.addran');
    let removeTxt = $('.remove');
    let copyTxt = $('.copy');


    addRan.click(function(){
        txtArea.val('smth');
    });

    removeTxt.click(function(){
        txtArea.val('');
    });

    copyTxt.click(function(){
        txtArea.select();
        document.execCommand('copy');
        alert('txt copied!')
    });
});