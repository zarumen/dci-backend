const fs = require('fs')

fs.readFile('./user-072.json', (err, buffer) => {

  if(err) console.log(err)

  const array = JSON.parse(buffer.toString());

  console.log(array.length)
  // เอา array ไปประมวลผล ให้ได้ผลลัพธ์ของคำถาม 
  // 1. มีคนชวนกี่คน
  const result1 = [...new Set(array.map(x => x.invitePerson))]
  // 2. คนชวนแต่ละคน ชวนคนมานั่งสมาธิได้กี่คน
  const result2 = array.map(x => x.invitePerson).reduce((obj,attr) => {
    if (!obj.hasOwnProperty(attr)) obj[attr] = 0;

    obj[attr] += 1;

    return obj;
  }, {})
  
  

  // 3. คนที่ชวนมาได้ เฉลี่ยเวลาของการนั่งสมาธิได้เท่าไหร่
  result3 = []
  result1.forEach((element,index) => {
    let sum = array
      .filter(x => x.invitePerson === element)
      .map(x => x.samadhi)
      .reduce((x,y) => x + y, 0)

    let obj = {}
    obj[result1[index]] = sum / result2[result1[index]]

    result3.push(obj)
  });
  console.log(result1.length, result2, result3)
})