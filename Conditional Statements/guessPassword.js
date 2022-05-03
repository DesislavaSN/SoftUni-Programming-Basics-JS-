function guessPass(input){
    let correctPass = "s3cr3t!P@ssw0rd";
    let entryPass = input[0];
    
    if (correctPass === entryPass  ) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
