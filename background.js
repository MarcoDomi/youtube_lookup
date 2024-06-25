chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Youtube LookUp",
        contexts: ["page"],
        id: "page"
    });
});