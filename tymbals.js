var y = 2; // number of characters to be sliced from string
var sLength = y - 1;
// array to be sliced and diced
var states = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cabo Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Democratic Republic of the Congo", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Solomon Islands", "Marshall Islands", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan ", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Peru", "Poland", "Paraguay", "Portugal", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "eSwatini", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
var stringFruit = new Array();
var string = "";
var x = 0;
var length = 0;
var trimmedString = "";

for (z = 0; z < states.length; z++) {

    string = states[z]; // get array item

    // option to remove blank spaces in string
    // rem out if not required
    string = string.replace(/\s/g, '');

    string = string.toLowerCase(); // normalise capitals to lowercase (Rem out if not wanted)


    x = string.length; // check length of array item

    document.write("<h4>Results for '" + string + "'</h4>"); // print array item to screen (Rem out if not needed)
    // iterate through string
    for (i = 0; i < x; i++) {
        length = i + y; // add extra characters to slice
        trimmedString = string.substring(i, length); // extract splice
        // add slice to array if slice is greater than required slice length
        if (trimmedString.length > sLength) {
            document.write(trimmedString + ","); // print this array item slice to screen (rem out if not required)
            stringFruit.push(trimmedString); // put text into string
        }
    }
}


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index; // removes dupes function
}

// usage example:

var unique = stringFruit.filter(onlyUnique); // call function remove duplicattes



unique.sort(); // sort uniques alphabetically

var printResult = stringFruit.toString(); // put array into a string ready for printing

document.write("<h3>All Results</h3>" + printResult); // print all results (Slices) to screen

var printResult = unique.toString(); // put unique array into a string ready for printing

document.write("<h3>Unique Results</h3>" + printResult); // print unique results (Slices) to screen

// count number of times items in the unique string slices appears in the total list of sliced strings;
// and create a nested array with the count and the string segment

var testFruit = "";
var uniqueFruit = 0;

var uniqueFruitBasket = new Array();
var uniqueBasketCount = new Array();

for (j = 0; j < unique.length; j++) {

    testFruit = unique[j];
    uniqueFruit = 0;


    for (i = 0; i < stringFruit.length; i++) {
        if (stringFruit[i] === testFruit) {
            // found a winner
            uniqueFruit = uniqueFruit + 1;
        }

    }
    uniqueFruitBasket[j] = uniqueFruit;
    uniqueBasketCount[j] = "[" + uniqueFruit + ", '" + testFruit + "']";

}

var printResult = uniqueFruitBasket.toString(); // put the nested array into a string ready for printing

document.write("<h3>Unique Count</h3>" + printResult); // print nested results to screen

// write joint array to screen to compare nested array with original arrays

document.write("<h3>Unique Count & String Test</h3>")

for (j = 0; j < unique.length; j++) {
    document.write(unique[j] + ":" + uniqueFruitBasket[j] + ",");
}

var basketofStrings = new Array();
var juiceTest = "";
for (j = 0; j < unique.length; j++) {
    testFruit = unique[j];
    basketofStrings[j] = "[" + testFruit;

    for (i = 0; i < states.length; i++) {

        juiceTest = states[i]; // get the text string from the original array
        juiceTest = juiceTest.replace(/\s/g, ''); //  remove spaces between words (Rem out if not required)
        juiceTest = juiceTest.toLowerCase(); // normalise capitals to lowercase (Rem out if not wanted)

        //find matching segment in original array string and add to new array of matched names
        if (juiceTest.includes(testFruit)) {
            basketofStrings[j] = basketofStrings[j] + ", " + juiceTest;
        }
    }
    basketofStrings[j] = basketofStrings[j] + "]";
}


var printResult = basketofStrings.toString(); // put found array of names array into a string ready for printing

document.write("<h3>Basket of Strings bundled into an array</h3>" + printResult); // print array of names with segment results to screen 

/*
Javascripts handling of numeric sort in embedded arrays is totally fucked
And there is no work around short of exporting the data and using another programming language
Basically it looks for the first character in hex and uses that to sort
e.g.

*/

uniqueBasketCount.sort(function(a, b) {
    a = a[1] * 0.0001;
    b = b[1] * 0.0001;

    return a < b ? -1 : (a > b ? 1 : 0);
});

var printResult = uniqueBasketCount.toString();
document.write("<h3>Sorted Array of Unique Count/String (Just to prove that JS doesn't handle the sorting of numerics in nested or embedded arrays)</h3>" + printResult);
