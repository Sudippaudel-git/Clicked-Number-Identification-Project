// Get the message element by its ID
const messageElement=document.getElementById("message");

// Get the number container element by its ID
const numberCOntainer=document.getElementById("container");

// Function to generate and display natural numbers
function displayNaturalNumber(){
    // clear Previous numbers
    numberCOntainer.innerHTML="";

    // Display numbers from 1 to your choices i will choose 1 to 10..
    for(let i=1;i<=10;i++){
        const numberElement=document.createElement('span');
        numberElement.textContent=i;
        // Add click event listener to each element
        numberElement.addEventListener('click',function(){
            // Now, Update a message when number is clicked.
            messageElement.textContent=`You clicked number -> ${i}!!!`;

        });

        // Now, Append the number to the container 
        numberCOntainer.appendChild(numberElement);
        // Add a space between numbers for readability
        if(i<10){
            numberCOntainer.appendChild(document.createTextNode(''));
        }
    }
}

// Call the function to display natural numbers initially
displayNaturalNumber();