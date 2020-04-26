const string = "This is a string"

const data = {};

const parsed = string.split(' ');
for(word of string){
  const [key, value] = word.split(' ');
  data[key] = value;
}

console.log(data)