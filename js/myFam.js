async function famWord() {
    while (true) {
        console.log("chay nao:3");
        await delay(2000);
        await document.querySelector("#app > div.v-application--wrap > div.main-layout > div.sidebar.main-site-background > ul:nth-child(3) > li:nth-child(4) > div").click();
        await delay(2000);
        let cl = document.querySelector("#app > div.v-application--wrap > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.realm-tab > div > div.monster-panel > div > div.section-wrap > div > div > div:nth-child(4) > div > span");
        await checkHT();
        await checkED();
        await checkTD();
        if (cl.innerText == "MINE" || cl.innerText == "CAST") {
            cl.click();
            await delay(rdnb(5000, 10000));
        }
        else {

            tm = checktime() * 1000;
            console.log("time doi: ", tm);
            await delay(tm);
        };
        await delay(rdnb(5000, 10000));
    }
};
function checktime() {
    let cl1 = document.querySelector("#app > div.v-application--wrap > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.realm-tab > div > div.monster-panel > div > div.section-wrap > div > div > div:nth-child(4) > div > span");
    if (cl1 != null) {
        time = cl1.innerText;
        let list_time = time.split(":");
        let time_wait = parseInt(list_time[0]) * 60 + parseInt(list_time[1]); //seconds
        console.log("time wait ", time_wait, " seconds");
        return time_wait;
    }
}

async function checkHT() {
    let cl1 = document.querySelector("#app > div > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.game-information.main-site-background.main-site-trim > div > div:nth-child(1) > div.progress-text");
    if (cl1 != null) {
        time = cl1.innerText;
        let list_time = time.split("/");
        let time_wait = parseInt(list_time[0]); //seconds
        console.log("HealTh: ", time_wait);
        if (time_wait < 50) {
            document.querySelector("#app > div.v-application--wrap > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.game-information.main-site-background.main-site-trim > div > div:nth-child(1) > div.progress-text > button > span").click();
            await delay(5000);
        };
    }
}
async function checkED() {
    let cl1 = document.querySelector("#app > div > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.game-information.main-site-background.main-site-trim > div > div:nth-child(2) > div.progress-text");
    if (cl1 != null) {
        time = cl1.innerText;
        let list_time = time.split("/");
        let time_wait = parseInt(list_time[0]); //seconds
        console.log("ED: ", time_wait);
        if (time_wait < 50) {
            document.querySelector("#app > div.v-application--wrap > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.game-information.main-site-background.main-site-trim > div > div:nth-child(2) > div.progress-text > button > span > span").click();
            await delay(5000);
        };

    }
}
async function checkTD() {
    let cl1 = document.querySelector("#app > div.v-application--wrap > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.game-information.main-site-background.main-site-trim > div > div:nth-child(3) > div.progress-text");
    if (cl1 != null) {
        time = cl1.innerText;
        let list_time = time.split("/");
        let time_wait = parseInt(list_time[0]); //seconds
        console.log("TD: ", time_wait);
        if (time_wait < 50) {
            document.querySelector("#app > div.v-application--wrap > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.game-information.main-site-background.main-site-trim > div > div:nth-child(3) > div.progress-text > button > span > span").click();
            await delay(5000);
        };

    }
}


chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.command == "FW_run") {
        famWord();
    }
    return true;
});
function delay(ms) {
    return new Promise(rp => {
        setTimeout(rp, ms);
    })
}
function rdnb(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}