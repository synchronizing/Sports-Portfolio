## Sports-Portfolio

### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* mongodb - [Download page](https://www.mongodb.com/download-center/community) .

### Running the Server
Make sure to have `mongodb` running in the background (instructions for Mongo below).

```
git clone https://github.com/synchronizing/Sports-Portfolio/
cd Sports-Portfolio/
npm install
npm start
```

#### Mongodb
To set up Mongodb on OSX, you may do the following if you have [brew](http://brew.sh) installed:

```
brew install mongo
brew services start mongo
```

### Docker Based
If you have Docker on your computer, you might instead prefer to run it directly on a container:

```
git clone https://github.com/synchronizing/Sports-Portfolio/
cd Sports-Portfolio/
docker-compose up -d
```
