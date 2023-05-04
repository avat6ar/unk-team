const spotify = document.getElementById("spotify");
const netflix = document.getElementById("netflix");
const shahid = document.getElementById("shahid");
const data = [
  {
    id: 1,
    name: "spotify",
    title: "Spotify 1 Month",
    credit: 150,
    vodafone: 30,
    paypal: 3,
  },
  {
    id: 2,
    name: "spotify",
    title: "Spotify 3 Months",
    credit: 400,
    vodafone: 50,
    paypal: 5,
  },
  {
    id: 3,
    name: "spotify",
    title: "Spotify 1 Year",
    credit: 1,
    vodafone: 30,
    paypal: 3,
  },
  {
    id: 4,
    name: "netflix",
    title: "Netflix 1 Month",
    credit: 150,
    vodafone: 30,
    paypal: 3,
  },
  {
    id: 5,
    name: "netflix",
    title: "Netflix 3 Months",
    credit: 400,
    vodafone: 50,
    paypal: 5,
  },
  {
    id: 6,
    name: "netflix",
    title: "Netflix 1 Year",
    credit: 1,
    vodafone: 30,
    paypal: 3,
  },
  {
    id: 7,
    name: "shahid",
    title: "Shahid 1 Month",
    credit: 150,
    vodafone: 30,
    paypal: 3,
  },
  {
    id: 8,
    name: "shahid",
    title: "Shahid 3 Months",
    credit: 400,
    vodafone: 50,
    paypal: 5,
  },
  {
    id: 9,
    name: "shahid",
    title: "Shahid 1 Year",
    credit: 1,
    vodafone: 30,
    paypal: 3,
  },
];
const displayAccounts = (data, element) => {
  data.map((account) => {
    element.innerHTML += `
        <div class="col-md-6 col-lg-4">
        <div class="item">
          <a onclick="clikedProduct(${account.id})">
            <figure
              class="c4-izmir c4-border-cc-3 c4-image-zoom-out ${account.name}"
            >
              <img
                src="img/${account.name}.jpg"
                class="img-fluid"
                alt="Sample Image"
              />
              <figcaption>
                <div class="c4-reveal-down mb-2">
                  <h4>${account.title}</h4>
                </div>
                <div class="c4-reveal-right c4-delay-200">
                  <h6>${
                    account.credit > 1
                      ? account.credit + "k"
                      : account.credit + "m"
                  } Credit ProBot</h6>
                </div>
                <div class="c4-reveal-right c4-delay-400">
                  <h6>30 Vodafone Cash</h6>
                </div>
                <div class="c4-reveal-right c4-delay-600">
                  <h6>1$ PayPal</h6>
                </div>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
        `;
  });
};
const data1 = data.filter((item) => item.id <= 3);
const data2 = data.filter((item) => item.id >= 4 && item.id <= 6);
const data3 = data.filter((item) => item.id >= 7);
displayAccounts(data1, spotify);
displayAccounts(data2, netflix);
displayAccounts(data3, shahid);

const clikedProduct = (id) => {
  let isProduct = data.find((account) => account.id === id);
  swal({
    title: isProduct.title,
    text: "You clicked the button!",
    buttons: ["No", true],
  }).then((value) => {
    console.log(value);
  });
};
