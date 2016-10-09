# BlankAngular2MEAN

Prerequire Docker.
www.docker.com


#1.Build Images เพื่อเตรียมการใช้งาน
./build.sh 

#2.Develop Images เพื่อเข้าสู่โหมดพัฒนา
./dev.sh

จากนั้นเข้าใช้งานที่ http://localhost:3000

Angular TypeScript Source Code จะอยู่ใน /src นะครับ

************************************************************************************************
# หรือถ้าจะรันโหมดในเครื่องตัวเองก็ 
npm install typescript@next -g

npm install karma-cli -g

npm install webpack -g

npm install typings -g

npm install nodemon -g

npm install

typings install

# จากนั้นก็ รันสองโปรแกรมครับ

npm run watch && npm start

#เข้าใช่งาน ที่ http://localhost:3000 เหมือนกัน


ทำมาเพื่อศึกษาการเรียน Angular 2 ของ Team ต้องมี Docker ก่อนนะครับเพราะใช้ Image หลักที่ได้เตรียมไว้ให้ที่ https://hub.docker.com/r/tonmanna/blankdockermean/ Image หลักนี้ จะอยู่ใน Folder /docker ซึ่งด้านในก็จะมี bash 
เพื่อใช้ในการ build image หลักตัวนี้
