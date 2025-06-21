console.log('selamat datang di egg bug wa by surya"')
require('child_process').spawn('bash', [], {
  stdio: ['inherit', 'inherit', 'inherit', 'ipc']
})
