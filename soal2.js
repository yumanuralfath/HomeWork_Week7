import fs from "fs";

//Read Homework.log
fs.readFile("homework.log", "utf-8", function (data, err) {
  if (err) return console.error(err);
  console.log(data);
});

//Write Homework.log
let data = "New Log .......";
fs.writeFile("homework.log", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
