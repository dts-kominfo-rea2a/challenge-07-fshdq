const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
async function promiseOutput(param) {
  try {
    const resIXX = await promiseTheaterIXX(param);
    const resVGC = await promiseTheaterVGC(param);

    const filterIXX = resIXX.filter(function (judul) {
      return judul.hasil === param;
    });

    const filterVGC = resVGC.filter(function (judul) {
      return judul.hasil === param;
    });

    return filterIXX.length += filterVGC.length;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  promiseOutput,
};
