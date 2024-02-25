import fs from "fs";

//Read Homework.log
fs.readFile("./homework.log", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
    let logData = data;

    //Write async-homework.log
    fs.writeFile("./async-homework.log", logData, "utf8", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Write Successfully");
      }
    });
  }
});
