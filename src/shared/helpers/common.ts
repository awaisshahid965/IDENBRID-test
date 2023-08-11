export const covertImageToDataUri = async (file: File) => {
  const dataUri = await new Promise((resolve) => {
    let reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    console.log("a");
    reader.readAsDataURL(file);
  });
  return dataUri;
};

export const uuid = () => {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};
