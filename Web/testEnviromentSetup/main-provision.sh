#!/bin/bash
#!/bin/bash

if [ ! -f ~/runonce ]
then

  #ONCE RUN CODE HERE
	apt-get update
	apt-get install nginx -y 
	cp /vagrant/testEnviromentSetup/nginx-site /etc/nginx/sites-available/default
	systemctl restart nginx
	docker network create --driver bridge isolated_nw --subnet "172.57.0.0/24"
  touch ~/runonce
fi
