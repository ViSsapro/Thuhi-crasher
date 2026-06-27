const fs = require('fs')

// >~~~~~~~~~~ Owner Setting ~~~~~~~~~~~< //
global.owner = "94760762142" // උඹේ Number එක දාපන් 94xx විදිහට
global.ownername = "THUHI TEAM"
global.botname = "THUHI OFCV01"
global.footer = "THUHI OFCV01"
global.packname = "THUHI_STICKER"

// >~~~~~~~~~~ System Setting ~~~~~~~~~~~< //
global.version = "V01"
global.idch = "120363426866716261@newsletter" // උඹේ Channel ID එක
global.prefa = ["", "/", "."]

// >~~~~~~~~~~ Thumbnail Setting ~~~~~~~~~~~< //
global.thumb = "https://img2.pixhost.to/images/7572/720914453_image.jpg" // Menu Pic Link එක

// >~~~~~~~~~~ Message Setting ~~~~~~~~~~~< //
global.mess = {
owner: "❌ *ACCESS DENIED* ❌\n> *You cannot use this feature because you are not the Owner!*",
ownerprem: "❌ *ACCESS DENIED* ❌\n> *You cannot use this feature because you are not Owner or Premium User!*"
}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})