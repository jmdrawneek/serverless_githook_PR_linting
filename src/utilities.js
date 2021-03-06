function formatGitName(prefix,  name, outputType) {
  const now = new Date(Date.now());
  const instanceName = now.toLocaleDateString('gb-en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', minute: '2-digit', second: '2-digit' }).replace(/[^A-Za-z0-9]/g, '-');

  return `${prefix}${name}/${instanceName}.${outputType}`

}


export default {
  formatGitName
}
