//using the file system to read the file

const fs = require("fs");
fs.readFile("note.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// want to write to the file

fs.writeFile("note.txt", "writing to the file now !", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("writing to the file created");
  }
});

// to append to the file in a new line

fs.writeFile("note.txt", "Added another file \r\n", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("writing to the file created");
  }
});

// to create a folder using the file system
fs.mkdir("Myfolder", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("new folder created successfully!");
  }
});

// to delete the folder we use the rmkir
fs.rmdir("myproject", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("oops your folder was delected");
  }
});
