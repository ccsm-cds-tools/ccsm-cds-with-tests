import * as cqlt from 'cql-testing'
import path from "node:path"

const args = process.argv.slice(2);
const rootDir = process.cwd();


function getArgValue(name) {
  const eqForm = args.find(a => a.startsWith(`${name}=`));
  // look for --dir=TestDir form
  if (eqForm) return eqForm.split("=", 2)[1] || null;
  // look for --dir TestDir form
  const idx = args.indexOf(name);
  if (idx !== -1) return args[idx + 1] ?? null;
  return null;
}

const directoryArg = args.find(arg => arg.startsWith("--dir"));
const subdir = getArgValue("--dir");

if (directoryArg && (subdir === "" || subdir == null)) {
  console.error("Error: --dir provided but empty (use --dir=subdir or --dir subdir)");
  process.exit(1);
}

const targetDir = subdir
  ? path.join(rootDir, "test", subdir)
  : rootDir;

if (subdir) console.log(`=========== Testing Directory: ${subdir}\n`);

//await Promise.resolve(cqlt.test(targetDir));
cqlt.test(targetDir)