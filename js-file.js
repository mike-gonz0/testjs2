// which container we are working with: 
{
const container = document.querySelector('#block');

// now we will create the element and give it a clas and text
const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = 'Hey I\'m red!';
    container.appendChild(paragraph);

    //adding tyle to the paragraph text
        paragraph.style.color = 'red';

// now we will create the element and give it a clas and text
const header3 = document.createElement('h3');
    header3.classList.add('header3');
    header3.textContent = 'Hey I\'m a blue h3!';
    container.appendChild(header3);

    //adding style to the header's text
        header3.style.color = 'blue';

// creating a new div element
const div1 = document.createElement('div');
    div1.classList.add('div1');
    container.appendChild(div1)    
};

// again we will start by defining our working space w/ querySelector. 
{
const div1 = document.querySelector('.div1')
    // lets add some style to our div
    div1.style.backgroundColor = 'pink';
    div1.style.borderStyle = 'solid';
    div1.style.borderColor = 'black';

// now we will be adding an h1 inside div1. 
const h1 = document.createElement('h1');
    h1.classList.add('h1');
    h1.textContent = 'I\'m in a div';
    div1.appendChild(h1); 
    
// now we will be adding a <p> inside the div1. 
const p = document.createElement('p');
    p.classList.add('p');
    p.textContent = 'ME TOO!';
    div1.appendChild(p);
};
