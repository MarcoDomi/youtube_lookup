chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Youtube LookUp",
        contexts: ["selection"],
        id: "selection"
    });
});

function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

chrome.contextMenus.onClicked.addListener((info, tab) => {

    let selected_text = info.selectionText;
    console.log(selected_text);

    let new_tab = chrome.tabs.create({
        url: `https://www.youtube.com/results?search_query=${selected_text}`,
        active: false
    });
    new_tab.then(onCreated, onError);
});