document.querySelector(".run_fam").addEventListener('click',function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {command: "FW_run"});
        RunF();
    });
});
function RunF() {
    document.getElementById("like1").disabled = true;
    document.getElementById("btn1").innerHTML = "RUNING...!";
  }