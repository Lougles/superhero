const Jimp = require('jimp');
const fse = require('fs-extra');

const jimpImg = async (img, id) => {
  const FILE_DIR = `public/${id}/${img.filename}`;
  const dir = `public/${id}`;
  fse.ensureDir(dir);
  const filename = img.filename;
  const imgPath = img.path;
  Jimp.read(imgPath)
  .then(ava => {
    return ava
      .resize(250, 250) // resize
      .quality(60) // set JPEG quality
      .write(FILE_DIR); // save
  })
  .catch(err => {
    console.error(err);
  });
  // await uploadAva(filepath, filename).catch(console.error);
  fse.unlink(`temp/${filename}`);
}
module.exports = {
  jimpImg
}