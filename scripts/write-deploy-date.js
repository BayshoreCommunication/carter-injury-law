#!/usr/bin/env node
// Writes the deploy (build) timestamp into <distDir>/deploy-date.json.
// The sitemap reads this file so lastmod reflects the true build date,
// even when file mtimes are not preserved by FTP/cPanel deploys.

const fs = require("fs");
const path = require("path");

try {
  const distDir = process.env.NEXT_DIST_DIR || ".next";
  const deployDate = {
    deployedAt: new Date().toISOString(),
  };

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(distDir, "deploy-date.json"),
    JSON.stringify(deployDate, null, 2),
    "utf8"
  );
} catch (error) {
  console.error(
    "Failed to write deploy-date.json:",
    error && error.message ? error.message : error
  );
  process.exitCode = 1;
}
