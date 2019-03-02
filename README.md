## Sports-Portfolio

##yo
### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* mongodb - [Download page](https://www.mongodb.com/download-center/community) .

### Installation
``` 
git clone https://github.com/linnovate/mean
cd mean
cp .env.example .env
npm install
sudo service mongod start
npm start (for development)
```
### Docker based 
``` 
git clone https://github.com/linnovate/mean
cd mean
cp .env.example .env
docker-compose up -d
```
