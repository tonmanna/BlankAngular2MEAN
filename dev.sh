docker rm -f blankmean2
docker volume create -d local --name node_models
docker run -it --name blankmean2 --env DEBUG=1 -v /$PWD:/project -v node_modules:/project/node_modules -p 3000:3000 blankmean2

