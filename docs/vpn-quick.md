# Setting up your private server
## Notes
 - We are working on an API to automate this deployment process

## Requirements 
 - Server with public IP 
    - preferably two IPs for maximum performance but it's not required
 - Linux operating system 
    - [Recommended Linux configurations](https://tunnels.is/#/docs/Linux%20Configs)
 - iptables installed
    ```bash
    $ apt install iptables
    ```

## Step 1 
Create a private server in the tunnels UI.
IMPORTANT: You will need to use the server ID later.

-- insert screenshot

## Step 2
Download and run the server binary with the `--config` and `--id` flags.
IMPORTANT: Save the `CERT SERIAL NUMBER` printed on the screen
IMPORTANT: Download the `server.crt`, you will need to connect

![new-server](https://raw.githubusercontent.com/tunnels-is/media/master/v3/guides/new-private-server/server-new.png)

```bash
$ wget https://github.com/tunnels-is/tunnels/releases/download/v[VERSION]/server_[VERSION]_Linux_x86_64.tar.gz
$ tar -xf tar -xf server_[VERSION]_Linux_x86_64.tar.gz
$ ./tunnels --config --id 6714f2479950f0dfede56c18
CERT SERIAL NUMBER:  6BF79FC5F63556DB96707400E03CA0CC
$ ls
server.crt  server.json  server.key  tunnels
```

![new-server](https://raw.githubusercontent.com/tunnels-is/media/master/v3/guides/new-private-server/server-update-serial.png)

## Step 3
Update your private server in the tunnels UI with the serial number from `Step 2`

-- insert screenshot

## Step 4
Validate the `server.json` and start the server

-- insert terminal text ??


## Step 5
Create a `tunnel interface` for the server. 
The tunnel interface will required the following configurations:
 - `IPv4Address` set to a unique local IP address
 - `Tag` and `IFName` set to your preffered values
 - `Private` set to true
 - `PrivateIP` set to your `server.json` ControlIP 
 - `PrivatePort` set to your `server.json` ControlPort 
 - `PrivateCert` set as the path to `server.crt` 

NOTE: This information is only stored locally on your computer. Tunnels does not know the location of your VPN servers.

-- insert screenshot

## Step 6
Connect to your new tunnel
 
## Example `server.json` config
```json
```
