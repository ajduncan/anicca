#!/bin/sh

echo "
########################################################################
             _               
  __ _ _ __ (_) ___ ___ __ _ 
 / _' | '_ \| |/ __/ __/ _' |
| (_| | | | | | (_| (_| (_| |
 \__,_|_| |_|_|\___\___\__,_|
       

########################################################################
"

# Update and upgrade
echo "Updating system..."
apt-get update > /dev/null 2>&1
echo "Upgrading system packages..."
apt-get -y upgrade > /dev/null 2>&1

# Install system dependencies.
echo "Installing system dependencies: nodejs, npm"
apt-get -y install nodejs npm > /dev/null 2>&1

# Make pm2 and other apps happy.
if [ ! -f /usr/bin/node ]; then
    echo "linking /usr/bin/nodejs to /usr/bin/node ..."
    ln -s /usr/bin/nodejs /usr/bin/node
fi

# Install pm2
echo "Installing pm2 for process management..."
npm install pm2 -g > /dev/null 2>&1

# Install npm dependencies.
echo "Installing anicca dependencies..."
cd /vagrant; sudo -u vagrant npm install

# Run the app.
echo "Running anicca services and region app."
pm2 start processes.json > /dev/null 2>&1

# Report status
echo "Status of processes..."
pm2 list
