const imgFile = document.getElementById("file-img"),
  imgBot = document.getElementById("img-bot"),
  priceBot = document.getElementById("price-bot");
let price = 100;
let duration = "1_month";
let typeBot = "system";
const uploadImg = (e) => {
  let file = e.files[0];
  let types = [
    "image/png",
    "image/avif",
    "image/svg",
    "image/svg+xml",
    "image/webp",
    "image/jpg",
    "image/jpeg",
  ];

  if (types.indexOf(file.type) == -1) {
    alert("Type not Supported");
    return;
  } else {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      imgBot.src = reader.result;
      console.log(reader.result);
    };
    reader.onerror = () => {
      alert("Error !!");
    };
  }
};

const changeTypeBot = (type, value) => {
  typeBot = type;

  if (type == "system") price = 100;
  if (type == "system_vip") price = 200;
  if (type == "security") price = 300;
  if (type == "music") price = 400;
  if (type == "scrims") price = 500;
  if (type == "givaway") price = 600;
  if (type == "autoline") price = 700;
  if (type == "auto_react") price = 800;
  if (type == "tax") price = 900;
  
  !value && changeDuration(duration, true);
  priceBot.innerHTML = `${price} Credit Probot`;
};

const changeDuration = (value, type) => {
  duration = value;
  !type && changeTypeBot(typeBot, true);

  if (duration == "1_month") price *= 1;
  if (duration == "3_months") price *= 3;
  if (duration == "1_year") price *= 12;

  priceBot.innerHTML = `${price} Credit Probot`;
};
