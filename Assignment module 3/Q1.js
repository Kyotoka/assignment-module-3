const printObjectProperties = obj => {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
  } else {
    for (let prop in obj) {
      console.log(`${prop}: ${obj[prop]}`);
    }
  }
};

//example no 1
const ObjectNo1 = {
  name: "Aizen",
  age: 50,
  city: "Captain"
};

printObjectProperties(ObjectNo1);

//example no 2
const ObjectNo2 = {

};
printObjectProperties(ObjectNo2);