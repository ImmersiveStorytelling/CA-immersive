#!/bin/bash
if [[ -z "${PROV_HAS_RAN}" ]]; then
	apt-get update
	apt-get install nginx -y 
	cp /vagrant/testEnviromentSetup/nginx-site /etc/nginx/sites-available/default
	systemctl restart nginx
	export PROV_HAS_RAN=true
fi
