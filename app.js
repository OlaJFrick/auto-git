const simpleGit = require("simple-git/promise");

async function pull(repoPath, branch) {
  const repo = simpleGit(repoPath);
  let status = await repo.pull("origin", "master");
  console.log(status);
}

// Add the Path to a repo you have locally
pull("/Users/olafrick_/Desktop/reverse-proxy");
