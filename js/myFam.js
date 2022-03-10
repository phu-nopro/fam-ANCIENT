async function famWord() {
    while (true) {
        console.log("chay nao:3");
        await delay(1000);
        var cl = document.querySelector("#app > div.v-application--wrap > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.realm-tab > div > div.monster-panel > div > div.section-wrap > div > div > div:nth-child(4) > div > span");
        if (cl.innerText == "MINE") {
            cl.click();
            await delay(rdnb(5000, 10000));
        }
        else {

            tm = checktime() * 1000;
            console.log("time doi: ", tm);
            await delay(tm);
        }
        await delay(rdnb(5000, 10000));
    }
};
function checktime() {
    var cl1 = document.querySelector("#app > div.v-application--wrap > div.main-layout > div.site-content > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.home-container > div.realm-tab > div > div.monster-panel > div > div.section-wrap > div > div > div:nth-child(4) > div > span");
    if (cl1 != null) {
        time = cl1.innerText;
        var list_time = time.split(":");
        let time_wait = parseInt(list_time[0]) * 60 + parseInt(list_time[1]); //seconds
        console.log("time wait ", time_wait, " seconds");
        return time_wait;
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