
'use strict';

var section=document.getElementById('BusMall');
var left=document.getElementById('left_img');
var middle=document.getElementById('middle_img');
var right=document.getElementById('right_img');

var allProduct=[];
var leftImage;
var middleImage;
var rightImage;
var totalClicks=0;

function BusMall(pName,iPath)
{
    this.pName=pName;
    this.iPath=iPath;
   this.numOfClick=0;
   this.numofProductclick=0;
    allProduct.push(this);


}

new BusMall('Bag','img/bag.jpg');
new BusMall('banana','img/banana.jpg');
new BusMall('bathroom','img/bathroom.jpg');
new BusMall('boots','img/boots.jpg');
new BusMall('breakfast','img/breakfast.jpg');
new BusMall('bubblegum','img/bubblegum.jpg');
new BusMall('chair','img/chair.jpg');
new BusMall('cthulhu','img/cthulhu.jpg');
new BusMall('dog-duck','img/dog-duck.jpg');
new BusMall('dragon','img/dragon.jpg');
new BusMall('pen','img/pen.jpg');
new BusMall('pet-sweep','img/pet-sweep.jpg');
new BusMall('scissors','img/scissors.jpg');
new BusMall('shark','img/shark.jpg');
new BusMall('sweep','img/sweep.png');
new BusMall('tauntaun','img/tauntaun.jpg');
new BusMall('unicorn','img/unicorn.jpg');
new BusMall('usb','img/usb.gif');
new BusMall('water-can','img/water-can.jpg');
new BusMall('wine-glass','img/wine-glass.jpg');


function generateRandomImg()
{
   var leftIndex=Math.floor(Math.random()*allProduct.length) ;
   var rightIndex=Math.floor(Math.random()*allProduct.length) ;
   var middleIndex=Math.floor(Math.random()*allProduct.length) ;

   while(leftIndex===rightIndex&&leftIndex===middleIndex)
   {
    
     rightIndex=Math.floor(Math.random()*allProduct.length) ;
    middleIndex=Math.floor(Math.random()*allProduct.length) ;
    if(leftIndex===rightIndex&&leftIndex===middleIndex)
    {
        rightIndex=Math.floor(Math.random()*allProduct.length) ;
    middleIndex=Math.floor(Math.random()*allProduct.length) ;
    }
 
   }

    displayImag(leftIndex,middleIndex,rightIndex);
}

function displayImag(leftIndex,middleIndex,rightIndex)
{
   leftImage=allProduct[leftIndex];
   middleImage=allProduct[middleIndex];
   rightImage=allProduct[rightIndex];

   leftImage.numofProductclick++;
   middleImage.numofProductclick++;
   rightImage.numofProductclick++;

   left.setAttribute('src',leftImage.iPath);
   middle.setAttribute('src',middleImage.iPath);
   right.setAttribute('src',rightImage.iPath);
}

generateRandomImg();


section.addEventListener('click',clickImg);

function clickImg(event)
{
    var cliced;

    if(event.target.id==='left_img')
    {
        cliced=leftImage;
    }
    else if(event.target.id==='middle_img')
    {
        cliced=middleImage;
    }

    else if(event.target.id==='right_img')
    {
        cliced=rightImage;
    }

    if(cliced)
    {
        generateRandomImg()
        cliced.numOfClick++;
        totalClicks++;
    }
    if(totalClicks >= 25){
        section.removeEventListener('click',clickImg);
        displayResults();
      }
}

function displayResults(){
    var listItem;
    var head=document.createElement('h3');
    head.textContent='Report of results after all rounds of voting';
    section.appendChild(head);
    for(var i = 0; i < allProduct.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = allProduct[i].pName+ 
       ' had ' + allProduct[i].numOfClick + ' votes and was shown ' + allProduct[i].numofProductclick;
          section.appendChild(listItem);
    }
  }