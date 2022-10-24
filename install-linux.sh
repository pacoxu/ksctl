#!/bin/bash

# Get the binary from the source code

usr=$(whoami)

#wget -O ~URL_OF_BINARY~

cd src/cli || echo -e "\033[31;40mPath couldn't be found\033[0m\n"
# Check if sudo access
go get -d
go build -v -o ksctl .
cd - || echo -e "\033[31;40mFailed to move to previous directory\033[0m\n"
chmod +x src/cli/ksctl


sudo mv -v src/cli/ksctl /usr/local/bin/ksctl
#cp -v ./ksctl /usr/local/bin

# Setup the configurations dir
#sudo mkdir /etc/ksctl

# Setup the ~/.kube
mkdir -p /home/$usr/.kube/ksctl/cred
touch /home/$usr/.kube/ksctl/cred/aws
touch /home/$usr/.kube/ksctl/cred/azure
touch /home/$usr/.kube/ksctl/cred/civo

mkdir -p /home/$usr/.kube/ksctl/config/civo
mkdir /home/$usr/.kube/ksctl/config/azure
mkdir /home/$usr/.kube/ksctl/config/aws
mkdir /home/$usr/.kube/ksctl/config/local

echo -e "\033[32;40mINSTALL COMPLETE\033[0m\n"