
'use strict';

var section = document.getElementById('BusMall');
var left = document.getElementById('left_img');
var middle = document.getElementById('middle_img');
var right = document.getElementById('right_img');

var allProduct = [];
var arr = [];
var leftImage;
var middleImage;
var rightImage;

var totalClicks = 0;



var totalNumofProductclick = [];
var totalNumOfClick = [];

function BusMall(pName, iPath) {
    this.pName = pName;
    this.iPath = iPath;
    this.numOfClick = 0;
    this.numofProductclick = 0;
    allProduct.push(this);
    arr.push(this.pName);




}

new BusMall('Bag', 'img/bag.jpg');
new BusMall('banana', 'img/banana.jpg');
new BusMall('bathroom', 'img/bathroom.jpg');
new BusMall('boots', 'img/boots.jpg');
new BusMall('breakfast', 'img/breakfast.jpg');
new BusMall('bubblegum', 'img/bubblegum.jpg');
new BusMall('chair', 'img/chair.jpg');
new BusMall('cthulhu', 'img/cthulhu.jpg');
new BusMall('dog-duck', 'img/dog-duck.jpg');
new BusMall('dragon', 'img/dragon.jpg');
new BusMall('pen', 'img/pen.jpg');
new BusMall('pet-sweep', 'img/pet-sweep.jpg');
new BusMall('scissors', 'img/scissors.jpg');
new BusMall('shark', 'img/shark.jpg');
new BusMall('sweep', 'img/sweep.png');
new BusMall('tauntaun', 'img/tauntaun.jpg');
new BusMall('unicorn', 'img/unicorn.jpg');
new BusMall('usb', 'img/usb.gif');
new BusMall('water-can', 'img/water-can.jpg');
new BusMall('wine-glass', 'img/wine-glass.jpg');
var leftIndex;
var rightIndex;
var middleIndex;

function generateRandomImg() {
    leftIndex = Math.floor(Math.random() * allProduct.length);
    rightIndex = Math.floor(Math.random() * allProduct.length);
    middleIndex = Math.floor(Math.random() * allProduct.length);
     
         while(leftIndex===rightIndex||leftIndex===middleIndex
          ||rightIndex===leftIndex||rightIndex===middleIndex
          ||middleIndex===leftIndex||middleIndex===rightIndex)
         {
             
     
        leftIndex=Math.floor(Math.random()*allProduct.length) ;
        rightIndex=Math.floor(Math.random()*allProduct.length) ;
        middleIndex=Math.floor(Math.random()*allProduct.length) ;
       }

        displayImag(leftIndex, middleIndex, rightIndex);


    }

    function displayImag(leftIndex, middleIndex, rightIndex) {
        leftImage = allProduct[leftIndex];
        middleImage = allProduct[middleIndex];
        rightImage = allProduct[rightIndex];

        leftImage.numofProductclick++;
        middleImage.numofProductclick++;
        rightImage.numofProductclick++;



        left.setAttribute('src', leftImage.iPath);
        middle.setAttribute('src', middleImage.iPath);
        right.setAttribute('src', rightImage.iPath);


        /* var ctx = document.getElementById('myChart').getContext('2d');
         var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
      
          // The data for our dataset
         
              data: {
                  labels: [leftImage.pName,middleImage.pName,rightImage.pName],
                  datasets: [{
                      label: 'My First dataset',
                      backgroundColor: 'rgb(255, 99, 132)',
                      borderColor: 'rgb(255, 99, 132)',
                      data: [leftImage.numofProductclick,middleImage.numofProductclick,rightImage.numofProductclick]
                  },
                  {
                      label: 'My First dataset',
                      backgroundColor: 'rgb(12, 250, 0)',
                      borderColor: 'rgb(255, 99, 132)',
                      data: [leftImage.numOfClick,middleImage.numOfClick,rightImage.numOfClick]
                  }]
              },
      
          // Configuration options go here
          options: {}
      });*/



    }

    generateRandomImg();




    section.addEventListener('click', clickImg);

    function clickImg(event) {
        var cliced;

        if (event.target.id === 'left_img') {
            cliced = leftImage;
        }
        else if (event.target.id === 'middle_img') {
            cliced = middleImage;
        }

        else if (event.target.id === 'right_img') {
            cliced = rightImage;
        }

        if (cliced) {


            cliced.numOfClick++;

            totalClicks++;
            generateRandomImg();
        }
        if (totalClicks >= 25) {
            section.removeEventListener('click', clickImg);
            displayResults();
            chart();

        }
    }


    function displayResults() {
        var listItem;
        var head = document.createElement('h3');
        head.textContent = 'Report of results after all rounds of voting';
        section.appendChild(head);
        for (var i = 0; i < allProduct.length; i++) {
            listItem = document.createElement('li');
            listItem.textContent = allProduct[i].pName +
                ' had ' + allProduct[i].numOfClick + ' votes and was shown ' + allProduct[i].numofProductclick;
            section.appendChild(listItem);


        }


    }

    function chart() {

        for (var i = 0; i < allProduct.length; i++) {

            totalNumOfClick[i] += allProduct[i].numOfClick;
            totalNumOfClick.push(totalNumOfClick[i]);

            console.log(allProduct[i].numOfClick);
        }

        for (var j = 0; j < allProduct.length; j++) {
            totalNumofProductclick[j] = allProduct[j].numofProductclick;
            totalNumofProductclick.push(totalNumofProductclick[j]);

            console.log(totalNumofProductclick);
        }


        /* for(var x=0;x<allProduct.length;x++)
         {
            arr[x]= allProduct[x].pName+' ';
            arr.push(arr[x]);
           
         }*/
        console.log(arr);

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset

            data: {
                labels: arr,
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1,
                    data: totalNumOfClick
                },
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgb(12, 250, 0)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1,
                    data: totalNumofProductclick
                }]
            },

            // Configuration options go here
            options: {}
        });
    }

