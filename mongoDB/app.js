const mongoose = require('mongoose');
cosnt fruitySchema = new mongoose.schema

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruity');


  const db = client.db(dbName);
  const collection = db.collection("fruits");
  const insertResult = await collection.insertMany([
    {
      fruit: "apple",
      score: 7,
      review: "Just one of theese keeps the doctors away!",
    },
    {
      fruit: "nectarine",
      score: 9,
      review:
        "Tastes perfect, would have been a 10 if i didn't have to shower after eating one of them. #juicy",
    },
    {
      fruit: "orange",
      score: 8,
      review:
        "A very well tasting juicy fruit that is easy to share. Does require som preperation though.",
    },
    {
      fruit: "banana",
      score: 0,
      review: "Not a fruit, it's a berry!",
    },
  ]);
  console.log("Inserted documents =>", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
 
  return "done.";
}