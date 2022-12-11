//*create
const fs=require('fs')
fs.writeFileSync('note.txt','hello')
//*create copy 
fs.copyFile('note.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log('note.txt was copied to destination.txt');
  });
  //*rename file
  fs.renameSync("./note.txt", "anothername.txt");
  //*get a list of the files
  const testFolder = './';
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
  //*antoher methode in fs 
  fs.appendFileSync('note.txt','world')


  