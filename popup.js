async function addPermission() {
    chrome.permissions.request({
        permissions: [],
        origins: ['<all_urls>']
    }, function (granted) {
        // The callback argument will be true if the user granted the permissions.
        if (granted) {
            console.log("Permission is granted");
        } else {
            console.log("Permission is not granted");
        }
    });
}

function removePermission() {
    chrome.permissions.remove({
        permissions: [],
        origins: ['<all_urls>']
    }, function (removed) {
        if (removed) {
            console.log("Permission is removed");
        } else {
            console.log("Permission is not removed");
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addPermission').addEventListener('click', addPermission);
    document.getElementById('removePermission').addEventListener('click', removePermission);
})