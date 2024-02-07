

// initialize the counter and the array
var numbernames=0;
var names = new Array();
function SortNames() {
   // Get the name from the text field
   thename=document.theform.newname.value;

   //Part:1 Name conversion to UPPERCASE
   //Convert the name to uppercase by assigning it to a variable
   UpperName = thename.toUpperCase();


   // Add the name to the array
   names[numbernames]= UpperName;
   // Increment the counter
   numbernames++;
   // Sort the array
   names.sort();

   //Part 2: Create a numbered list of the sorted names
   // Display the sorted names with numbers
      var sortedList = "";
      for (var i = 0; i < names.length; i++) {
         sortedList += (i + 1) + ". " + names[i] + "\n";
      }
   document.theform.sorted.value = sortedList;
}


//Part 3: Add "Enter" functionality
function PressedEnter(event) {
      if (event.keyCode === 13) { // Check if Enter key is pressed
          SortNames(); // Call the SortNames function
          event.preventDefault(); // Prevent default form submission behavior
      }
    }