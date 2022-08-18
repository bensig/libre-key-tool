# Recover & Generate mnemonic keys for libre and eosio blockchains

## Requirements

- node LTS (16)
- npm

## Preinstall for Linux 

Install nvm
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Install node 16
```
source ~/.profile
nvm install 16
```

## Preinstall for OS X

Install Brew (if on OS X)
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
brew update 
```

Install nvm with Brew (OS X)
```
brew install nvm 
mkdir ~/.nvm 
nano ~/.bash_profile
```
put this in the .bash_profile
```
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

Install node 16
```
source ~/.bash_profile
nvm install 16
```
## Preinstall for Windows
```
Install git on Windows [https://www.pugetsystems.com/labs/hpc/Note-Setup-Git-for-PowerShell-on-Windows-10-1653/](https://git-scm.com/download/win)
Download NVM for Windows [https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe)
```

## Install
```
git clone https://github.com/Galaxoid-Labs/libre-key-tool.git
cd libre-key-tool
npm install
```

## Usage

```
node libre-key-tool.js
```

> Usage: libre-key-tool [options] [command]
>
> CLI Recover & Generate mnemonic keys for libre and eosio blockchains
>
> Options:
> -V, --version output the version number
> -h, --help display help for command
>
> Commands:
> * `node libre-key-tool.js generate` Generate a new mneonic seed and keypair
> * `node libre-key-tool.js recover` <string> Decode mneonic to keypair
> * `node libre-key-tool.js help` [command] display help for command
