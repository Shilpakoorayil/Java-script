    let text = "Mr.Blue has a blue house";
    let position = text.search("blue"); // Returns 17 (index of the first 'blue')
    let caseInsensitivePosition = text.search(/blue/i); // Returns 4 (index of 'Blue' due to case-insensitive flag) 
    console.log(position);
    console.log(caseInsensitivePosition);
    
    