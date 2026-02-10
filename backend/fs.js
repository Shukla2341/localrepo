const fs=require("fs");

fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error reading file",err);
        return;
    }
    console.log("File name:", data);
});