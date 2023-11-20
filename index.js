const fs = require("fs");
const csv_parser = require("csv-parser");
const axios = require("axios");

function getFileStream(filename) {
  return fs.createReadStream(filename);
}

function pipeParser(stream) {
  return stream.pipe(csv_parser);
}

function main(filename) {
  try {
    const stream = getFileStream(filename);
    const parserStream = pipeParser(stream);
    parserStream.on("data", (data) => console.log(data));
    parserStream.on("end", () => console.log());
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
