#docker rm -f blankdocker_test
#docker volume create -d local --name node_models
#docker run -d --name blankdocker_test --env DEBUG=1 -v /$PWD:/project -v node_modules:/project/node_modules -p 3000:3000 -p 9229:9229 blankdockermean
#docker exec -it blankdocker_test bash4
webpack --inline --progress
