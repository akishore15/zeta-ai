const { exec } = require('child_process');
const getOllamaResponses = function() {
  exec(./ollama.sh)
}
