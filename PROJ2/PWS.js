//---------------CLOSE-----------------------------//
let c=document.querySelector('#close');
let m=document.querySelector('.message');

c.addEventListener('click',function(){
    m.classList.add('message1');
});
//-----------------------------------------------//
let menuebtn = document.querySelector('#menue');
let menue = document.querySelector('.menue_list');



menuebtn.addEventListener('click',function(){
    menue.style.display = 'flex';
    m.style.display = 'none';
});

let exit = document.querySelector('.exit_menue');

exit.addEventListener('click',function(){
    menue.style.display = 'none';
});
