const loadingForm = document.getElementById("loading-form"),
  inputServerId = document.getElementById("server-id"),
  formServerId = document.getElementById("submit-serverId"),
  displayForm = document.getElementById("dsiplay-form");

formServerId.addEventListener("submit", fromSubmit);

let avatar = true;
function fromSubmit(e) {
  e && e.preventDefault();
  loadingForm.classList.add("show");
  if (avatar) {
    displayForm.innerHTML = `
    <div class="inputs-box shadow">
      <div class="text-center mb-4">
        <h2>Tokens Form</h2>
      </div>
      <form action="" id="form-submit">
        <div class="row justify-content-between">
          <div class="d-md-flex justify-content-between">
            <div class="col text-md-start">
              <span class="label">
                <span class="offline"></span> Offline:
              </span>
              <span class="value" id="value-offline">99</span>
            </div>
            <div class="col mt-2 mt-md-0 text-md-center">
              <span class="label"
                ><span class="online"></span> Online:</span
              >
              <span class="value" id="value-online">100</span>
            </div>
            <div class="col mt-2 mt-md-0 text-md-end">
              <span class="label"><span class="auto"></span> Auto:</span>
              <span class="value" id="value-auto">100</span>
            </div>
          </div>
          <div class="group mt-4">
            <label for="tokens-number" class="h5 mb-2"
              >Tokens Of Number</label
            >
            <input
              type="number"
              id="tokens-number"
              name=""
              placeholder="Enter tokens of number..."
              value="10"
            />
          </div>
          <div class="group mt-4">
            <label for="tokens-type" class="h5 mb-2">Tokens Type</label>
            <select
              name=""
              id="tokens-type"
            >
              <option value="offline" selected>Offline</option>
              <option value="online">Online</option>
              <option value="auto">Auto</option>
            </select>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div class="d-md-flex mt-4 justify-content-between">
            <div class="col text-md-start">
              <span class="label">Credit Probot: </span>
              <span class="value" id="price-user">100</span>
            </div>
            <div class="col mt-2 mt-md-0 text-md-center">
              <span class="label"> 1 Token Price: </span>
              <span class="value" id="token-price">10 Credit Probot</span>
            </div>
            <div class="col mt-2 mt-md-0 text-md-end">
              <span class="label">Total Price: </span>
              <span class="value" id="total-price"
                >100 Credit Probot</span
              >
            </div>
          </div>
          <div class="error-id" id="error"></div>
          <div class="mt-4">
            <button class="btn w-100" id="submit-btn" type="submit" disabled>Submit...</button>
          </div>
        </div>
      </form>
    </div>
    `;
    const displayTotalPrice = document.getElementById("total-price"),
      tokenPrice = document.getElementById("token-price"),
      numberTokens = document.getElementById("tokens-number"),
      typeTokens = document.getElementById("tokens-type"),
      submitForm = document.getElementById("form-submit"),
      priceUser = document.getElementById("price-user"),
      submitBtn = document.getElementById("submit-btn"),
      valueOffline = document.getElementById("value-offline"),
      valueOnline = document.getElementById("value-online"),
      valueAuto = document.getElementById("value-auto");

    let priceTypeToken = 10;
    let tokensNumber = 10;
    let valueTokens = "offline";
    let totalPrice = priceTypeToken * tokensNumber;
    numberTokens.addEventListener("change", displayPrice);
    typeTokens.addEventListener("change", changeTypeToken);
    submitForm.addEventListener("submit", submitTokens);

    function displayPrice(number, valueType) {
      tokensNumber = valueType ? Number(number) : Number(number.target.value);
      totalPrice = tokensNumber * priceTypeToken;
      displayTotalPrice.innerHTML = `${totalPrice} Credit Probot`;
      checkPrice();
      changeNumberTokens();
    }
    function changeTypeToken(type) {
      valueTokens = type.target.value;
      if (type.target.value == "online") {
        priceTypeToken = 20;
      }
      if (type.target.value == "auto") {
        priceTypeToken = 30;
      }
      if (type.target.value == "offline") {
        priceTypeToken = 10;
      }
      tokenPrice.innerHTML = `${priceTypeToken} Credit Probot`;
      displayPrice(tokensNumber, true);
      checkPrice();
      changeNumberTokens();
    }
    const checkPrice = () => {
      if (Number(priceUser.innerHTML) >= totalPrice) {
        submitBtn.disabled = false;
        error.innerHTML = "";
      } else {
        const error = document.getElementById("error");
        submitBtn.disabled = true;
        error.innerHTML = `
            <p class="mb-0 mt-4">
              Please enter the bot in the first server
              <a href="" target="_blank">link bot</a>
            </p>
          `;
      }
      console.log("1");
    };
    checkPrice();

    const changeNumberTokens = () => {
      const error = document.getElementById("error");
      if (valueTokens == "auto") {
        if (tokensNumber > Number(valueAuto.innerHTML)) {
          submitBtn.disabled = true;
          error.innerHTML = `
            <p class="mb-0 mt-4">
              Please enter the bot in the first server
              <a href="" target="_blank">link bot</a>
            </p>
          `;
          console.log(valueTokens);
        } else {
          submitBtn.disabled = false;
          error.innerHTML = "";
        }
      }
      if (valueTokens == "online") {
        if (tokensNumber > Number(valueOnline.innerHTML)) {
          submitBtn.disabled = true;
          error.innerHTML = `
            <p class="mb-0 mt-4">
              Please enter the bot in the first server
              <a href="" target="_blank">link bot</a>
            </p>
          `;
          console.log(valueTokens);
        } else {
          submitBtn.disabled = false;
          error.innerHTML = "";
        }
      }
      if (valueTokens == "offline") {
        if (tokensNumber > Number(valueOffline.innerHTML)) {
          submitBtn.disabled = true;
          error.innerHTML = `
            <p class="mb-0 mt-4">
              Please enter the bot in the first server
              <a href="" target="_blank">link bot</a>
            </p>
          `;
          console.log(valueTokens);
        } else {
          submitBtn.disabled = false;
          error.innerHTML = "";
        }
      }
      checkPrice()
    };
    changeNumberTokens();
  }
  if (avatar == false) {
    const error = document.getElementById("error");
    inputServerId.classList.add("error");
    error.innerHTML = `
      <p class="mb-0 mt-4">
        Please enter the bot in the first server
        <a href="" target="_blank">link bot</a>
      </p>
      `;
    avatar = undefined;
  }

  avatar !== undefined && loadingForm.classList.remove("show");
}
function submitTokens(e) {
  e.preventDefault();
  loadingForm.classList.add("show");
}
