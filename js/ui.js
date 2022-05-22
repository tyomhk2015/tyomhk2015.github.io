const HIDDEN_CLASS_NAME = "hidden";
const navigationUL = document.querySelector(".js-navigation-ul");
const contentWrapper = document.querySelector(".js-content-wrapper");
const hideUIBtn = document.querySelector(".js-hide-ui-button");
const wrapper = document.querySelector(".js-wrapper");
const bigLogo = document.querySelector(".js-big-logo");

const switchTab = (tab) => {
  if(tab.classList.contains(ACTIVE_CLASS_NAME)) return;
  navigationUL.querySelector(`.${ACTIVE_CLASS_NAME}`).classList.remove(ACTIVE_CLASS_NAME);
  tab.classList.add(ACTIVE_CLASS_NAME);
}

const switchContent = (contentID) => {
  contentWrapper.querySelector(`.${ACTIVE_CLASS_NAME}`).classList.remove(ACTIVE_CLASS_NAME);
  contentWrapper.querySelector(`.js-${contentID}`).classList.add(ACTIVE_CLASS_NAME);
}

const resetTabContent = () => {
  navigationUL.querySelector(`.${ACTIVE_CLASS_NAME}`).classList.remove(ACTIVE_CLASS_NAME);
  contentWrapper.querySelector(`.${ACTIVE_CLASS_NAME}`).classList.remove(ACTIVE_CLASS_NAME);

  navigationUL.querySelector('#home').classList.add(ACTIVE_CLASS_NAME);
  contentWrapper.querySelector('.js-home').classList.add(ACTIVE_CLASS_NAME);
}

const toggleBrowser = (e) => {
  if(wrapper.classList.contains(HIDDEN_CLASS_NAME)) {
    wrapper.classList.remove(HIDDEN_CLASS_NAME);
    bigLogo.classList.add(HIDDEN_CLASS_NAME);
    e.target.innerText = "Hide UI"
    playMenuOpenSound();
  } else {
    wrapper.classList.add(HIDDEN_CLASS_NAME)
    bigLogo.classList.remove(HIDDEN_CLASS_NAME);
    e.target.innerText = "Show UI"
    playCancelSound();
  }
}

navigationUL.addEventListener("click", (e) => {
  const tab = e.target.closest(".js-tab");
  if(!tab || tab.classList.contains(ACTIVE_CLASS_NAME)) return;
  switchTab(tab);
  switchContent(tab.id);
  paintImage();
});

hideUIBtn.addEventListener("click", toggleBrowser);