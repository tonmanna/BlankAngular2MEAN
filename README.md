# BlankAngular2MEAN

#1.Build Images เพื่อเตรียมการใช้งาน
./build.sh 

#2.Develop Images เพื่อเข้าสู่โหมดพัฒนา
./dev.sh

http://localhost:3000 จบ

Angular TypeScript Source Code จะอยู่ใน /src หนุกหนาน

ทำมาเพื่อศึกษาการเรียน Angular 2 ของ Team ต้องมี Docker ก่อนนะเพราะใช้ Image หลักที่ได้เตรียมไว้ให้ที่ https://hub.docker.com/r/tonmanna/blankdockermean/ Image หลักนี้ จะอยู่ใน Folder /docker ซึ่งด้านในก็จะมี bash อีกเพื่อใช้ในการ build image หลักตัวนี้


# หรือถ้าจะรันโหมดในเครื่องตัวเองก็ 
npm install typescript@next -g
npm install karma-cli -g
npm install webpack -g
npm install typings -g
npm install nodemon -g
npm install
typings install

จากนั้นก็ รันสองโปรแกรมครับ
npm run watch && npm start
