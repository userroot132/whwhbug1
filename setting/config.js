const fs = require('fs')

global.packname = 'Anomalixc'
global.owner = "56964093186@s.whatsapp.net"
global.author = 'Anomalixc'
global.namaowner = "Anomalixc"
global.namabot = "Anomalixc"
global.linkch = ''
global.idch = "@newsletter"

global.status = false
global.welcome = false
global.antispam = true
global.autoread = false

global.mess = {
    group: "Akses Ditolak!",
    admin: "Akses Ditolak!",
    owner: "Akses Ditolak!",
    premium: "Akses Ditolak!",
    botadmin: "Akses Ditolak!",
    private: "Akses Ditolak!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
