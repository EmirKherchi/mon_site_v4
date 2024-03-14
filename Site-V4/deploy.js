import dotenv from "dotenv";
import FtpDeploy from "ftp-deploy";


dotenv.config({ path: "./.env" });

// console.log(dotenv.config({ path: "./.env" }))
// Replace "/out" with your build directory which contains all generated static files
// const outDir = path.join(process.cwd(), "./dist");
new FtpDeploy().deploy({
  user: process.env.FTP_USER, // Your credentials
  password: process.env.FTP_PASS, // Your credentials
  host: process.env.FTP_HOST, // Your credentials
  port: process.env.FTP_PORT, // Your credentials

  localRoot: "./dist", // Location of build files in project
  remoteRoot: "/www", // Upload location on remote, replace with subfolder on FTP-server if required

  include: ["*", "**/*"], // Upload all files from build folder
  exclude: [], // Exclude no files

  deleteRemote: true, // Set to true if you want to delete ALL FILES in the remote root before uploading
  forcePasv: true, // Use passive mode
  sftp: false,
}).then((res) => console.log("finished:", res))
  .catch((err) => console.log('error', err));
