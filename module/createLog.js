const fs = require("fs");

module.exports.createLog = (req, res, next) => {
  const currentDate = new Date();

  //getting date
  const date = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  // getting time
  const time = `${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}`;
  const fileTitle = date + " " + time;

  //content of file as timestamp
  const content = currentDate.toTimeString();

  // writing into file
  const dir = "./log";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true,
    });
  }
  fs.writeFile(`${dir}/${fileTitle}.txt`, content, (err) => {
    if (err) {
      return console.log(err);
    } else {
      res.send("successfully created");
      console.log(fileTitle);
    }
  });
};
