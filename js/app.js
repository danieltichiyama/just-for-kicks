// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

document.querySelector('#details').addEventListener('click',availAlert);

function availAlert (){
    alert ('Not Available in Hawaii.');
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

function showHide(event){
    // console.log(typeof event.target.firstElementChild.id);
    var descrip = document.querySelector("#"+event.target.firstElementChild.id);
    // console.log(descrip);
    if (descrip.style.display == 'inherit'){
        descrip.style.display = 'none';
    }else{
        descrip.style.display = 'inherit';
        // console.log('test');
    }
}

document.querySelector('#name1').addEventListener('mouseover',showHide);

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

var descrip2 = document.createElement('div');
descrip2.id = 'descrip2';
descrip2.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
document.querySelector('#name2').appendChild (descrip2);


document.querySelector('#name2').addEventListener('click',showHide);


//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

    var iTags = document.querySelectorAll ('i');
    // console.log(iTags);

    for (i=0;i<iTags.length;i++){
        // console.log(iTags);
        iTags[i].innerHTML = 0;
        // console.log(typeof iTags[i].innerHTML);
        iTags[i].addEventListener('click',plusOne)
    }

    function plusOne (event){
        // console.log(event.target);
        event.target.innerHTML = parseInt(event.target.innerHTML) + 1;

    }

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

var plusIcons = document.querySelectorAll ('#increase');

for (i=0;i<plusIcons.length;i++){
    // console.log(plusIcons[i]);
    plusIcons[i].addEventListener('click', goUp);
    plusIcons[i].count = parseInt(plusIcons[i].parentElement.childNodes[0].textContent);
    // console.log (plusIcons[i].count);
}



function goUp (cost){
    console.log('count before ++', this.count)
    console.log (this.parentElement.childNodes);
    console.log(this.count);

    const num = parseInt(this.parentElement.childNodes[0].textContent);

    this.parentElement.childNodes[0].textContent = num+this.count;
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

var minusIcons = document.querySelectorAll ('#decrease');

for (i=0;i<plusIcons.length;i++){
    // console.log(plusIcons[i]);
    minusIcons[i].addEventListener('click', goDown);
    minusIcons[i].count = parseInt(minusIcons[i].parentElement.childNodes[0].textContent);
    // console.log (minusIcons[i].count);
}

function goDown (cost){
    console.log('count before ++', this.count)
    console.log (this.parentElement.childNodes);
    console.log(this.count);

    const num = parseInt(this.parentElement.childNodes[0].textContent);

    this.parentElement.childNodes[0].textContent = num-this.count;
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

var imageElem= document.querySelectorAll ('img');

var airJordan9 = imageElem[6].parentElement;

var colorData = document.createAttribute ('data-colors');
colorData.value = "red,white";
airJordan9.setAttributeNode (colorData);


// console.log(imageElem[6].parentElement);

var colorSs = imageElem[6].parentElement.dataset.colors;

var colorArr = colorSs.split(",");

// console.log(colorArr);

debugger;
for (i=0;i<imageElem.length;i++){
    console.log(imageElem[i]);
    // if (imageElem[i].parentElement.dataset.colors==undefined){
    //     console.log('no other colors to choose from.',imageElem[i]);
    // }else{
}
// imageElem[i].addEventListener ('click',colorChoice);
// imageElem[i].parentElement.style.position = 'relative';

// var colorSelectBox = document.createElement ('div');
// colorSelectBox.className = 'colorSelector';
// colorSelectBox.style.cssText = 'height:10%;width:100%;position:absolute;top:0;right:0;background-color:white;border:1px black solid;display:inherit;z-index:100;dislay:flex;flex-direction:row;';

// imageElem[i].parentElement.appendChild (colorSelectBox);

// for (i=0;i<colorArr.length;i++){
//     var colorBox = document.createElement ('div');
//     colorBox.className = 'colorBox';
//     colorBox.style.cssText = 'height:5px;width:5px;'
//     colorBox.style.backgroundColor = colorArr[i];
//     colorSelectBox.appendChild (colorBox);
//     }
//     }

// }


function colorChoice (){
    console.log('colorChoice');
}



//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.



//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
