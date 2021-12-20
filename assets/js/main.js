// 'use strict';

let seen1= document.getElementsByClassName('tog1'),
    seen2= document.getElementsByClassName('tog2'),
    span1=document.getElementsByClassName('span1pic'),
    span2=document.getElementsByClassName('span2pic');


span1[1].onclick=function(){
    seen2[0].style.display="none";
    seen2[1].style.display="none";
    seen2[2].style.display="none";
    seen1[0].style.display="block";
    seen1[1].style.display="block";
    seen1[2].style.display="block";

};

span2[0].onclick=function(){
    seen2[0].style.display="block";
    seen2[1].style.display="block";
    seen2[2].style.display="block";
    seen1[1].style.display="none";
    seen1[0].style.display="none";
    seen1[2].style.display="none";
};





