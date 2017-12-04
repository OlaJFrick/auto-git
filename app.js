const simpleGit = require("simple-git/promise");
const path = require("path");
const basePath = "/var/www";
const repoInfo = require("./repos-and-branches.json");

// Checkout a branch and make a pull
async function pull(repoPath, branch) {
  const repo = simpleGit(repoPath);
  let status = await repo.pull("origin", branch).catch(e => (err = e));

  if (err) {
    console.log("pull-error", err);
  }
}

// Intervall pull all repos from github every 10 sec
setInterval(() => {
  for (let repo of repoInfo) {
    pull(path.join(basePath, repo.path), repo.branch);
  }
}, 10000);
