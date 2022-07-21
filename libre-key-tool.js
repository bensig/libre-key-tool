import ecc from "eosjs-ecc";
import bip39 from "bip39";
import hdkey from "hdkey";
import wif from "wif";

import { Command } from "commander";
const program = new Command();

program
  .name("libre-key-tool")
  .description(
    "CLI Recover & Generate mnemonic keys for libre and eosio blockchains"
  )
  .version("1.0.0");

program
  .command("generate")
  .description("Generate a new mneonic seed and keypair")
  .action((str, options) => {
    handle("");
  });

program
  .command("recover")
  .description("Decode mneonic to keypair")
  .argument("<string>", "mneomic seed phrase")
  .action((str, options) => {
    handle(str);
  });

program.parse();

function handle(str) {
  let mnemonic = str;
  if (mnemonic === "") {
    mnemonic = bip39.generateMnemonic();
  }
  console.log("\x1b[35m%s\x1b[0m", "SEED PHRASE => " + mnemonic);
  let kp = generateKeyPair(mnemonic);
  console.log("\x1b[33m%s\x1b[0m", "PRIVATE KEY => " + kp.privateKey);
  console.log("\x1b[32m%s\x1b[0m", "PUBLIC KEY  => " + kp.publicKey);
}

function generateKeyPair(seedString) {
  const privateKey = derivePrivateKey(seedString);
  const publicKey = ecc.privateToPublic(privateKey);
  return { privateKey, publicKey };
}

function derivePrivateKey(mnemonic) {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const master = hdkey.fromMasterSeed(seed);
  const node = master.derive("m/44'/194'/0'/0/0");
  const privateKey = wif.encode(128, Buffer.from(node["_privateKey"]), false);
  return privateKey;
}
