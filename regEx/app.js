let re;
re = /hello/;
re = /hello/i;

// Metacharacter Symbols 

re=/^h/i;      // Must start with letter that has been specified after ^ this sign 
re=/world$/i;  //Must ends with letter that has been specified before $ money sign 
re=/^hello$/i; //Starts with hello and ends with hello ..begin and end with 
re=/h.llo/i;   // Matches any one character ---use of dot 
re=/h*llo/i;   // Matches any character 0 or more than times ---use of asterisk

re=/gre?ay/i;  // optional characters 





// string to match 

const str = 'h#llo';

// log Results 

const result = re.exec(str);

console.log(result);




function reTest(re,str) {

  if(re.test(str)){


    console.log(`${str} matched ${re.source}`);
  }else{
    console.log(`${str} does NOT matched ${re.source}`);


  }






}

reTest(re,str);