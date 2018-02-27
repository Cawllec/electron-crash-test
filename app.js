Electron = require('electron');


document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        document.getElementById('br_crash').onclick=brCrash
        document.getElementById('node_crash').onclick=nodeCrash
    }
}

function brCrash() {
    throw "OH NO";
}

function nodeCrash() {
    Electron.ipcRenderer.send('crash');
}