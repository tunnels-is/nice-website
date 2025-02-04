# Setting up your private server

## Requirements 
 - Server with a public IPv4 Address 
    - preferably two IPv4 Addresses for maximum performance but it's not required
 - Linux operating system 
    - [Recommended Linux configurations](https://tunnels.is/#/docs/Linux%20Configs)
 - iptables installed

## Hardware Requirements
 - CPU: 1 core, 1 thread (this setup can push 1Gbps)
    - <b>NOTE</b>: Performance on MIPS architecure is sub-optimal for now
 - RAM: 500MB (we do some memory pre-allocation for performance reasons)
 - DISK: Tunnels does not use disk
 - NIC: any network card will do as longs as you have an IPv4 Address

# Step 1 
Navigate to `Private` in the `Tunnels UI` and press `New Server`.
<b>IMPORTANT</b>: You will need to use the `ID` later.

# Step 2
Download and run the server binary to a location of your choosing.
Releases can be found [here](https://github.com/tunnels-is/tunnels/releases/latest)
```bash
$ wget https://github.com/tunnels-is/tunnels/releases/download/v[VERSION]/server_[VERSION]_Linux_x86_64.tar.gz
$ tar -xf server_[VERSION]_Linux_x86_64.tar.gz
```

Run the server binary using the `--config` and `--id` flags. 
The `--id` flag should be the `ID` you got when you created the priavte server in step 1.

```bash
$ ./tunnels --config --id [PRIVATE_SERVER_ID]
CERT SERIAL NUMBER:  [CERTIFICATE_SERIAL]
```
<b>IMPORTANT</b>: Download the `server.crt`, you will need it to connect.
<b>IMPORTANT</b>: Save the `CERTIFICATE_SERIAL` it will be used later.

The directory should look like this once you're done:
```bash
$ ls
server.crt  server.json  server.key  tunnels
```

Review the `server.json` and start the server if everything looks good.
example generated `server.json`:
```json
{
  "ID": "[PRIVATE_SERVR_ID]", // This is your private server ID
  "ControlIP": "[YOUR_SERVER_IP]", 
  "ControlPort": "444", 
  "UserMaxConnections": 4, 
  "InterfaceIP": "[YOUR_SERVER_IP]", 
  "DataPort": "443", 
  "StartPort": 2000,
  "EndPort": 65500,
  "AvailableMbps": 1000, 
  "AvailableUserMbps": 10,
  "InternetAccess": true, 
  "LocalNetworkAccess": true, 
  "DNSAllowCustomOnly": false, 
  "DNS": [], 
  "Networks": [
    {
      "Tag": "",
      "Network": "[YOUR_SERVER_IP]/24",
      "Nat": "10.10.10.1/24", 
      "Routes": null
    }
  ],
  "DNSServers": [
    "1.1.1.1",
    "8.8.8.8"
  ],
  "ControlCert": "./server.crt",
  "ControlKey": "./server.key"
}
```
<b>IMPORTANT</b>: Save the `ControlIP` and `ControlPort` they will be used later.
<b>NOTE:</b> (full server config example)[https://tunnels.is/#/docs/Server%20Config]

# Step 3
Start your server with feature flags of your choice:
 - VPN: This starts a `Virtual Private Network`, this allows packets to be forwarded to an inner network or the
 internet.
 - VPL: This starts a `Virtual Private Lan`, this allows connected devices to communicate with eachother as if they were
   on a lan.
 - API: This start an API server which can display the DHCP table for the `Virtual Private Lan` 
```bash
$ ./tunnels
```
<b>NOTE</b>: Starting the server does not require any command line flags


# Step 4
Navigate to `Tunnels` in the `Tunnels UI` and press `New Tunnels`

The tunnel interface will required the following configurations:

 - `IPv4Address` set to a unique local IP address (recommended: 172.22.22.33)
 - `Tag` The identifier for this connection
 - `IFName` The name given to your tunnel interface
 - `Private` set to `true`
 - `PrivateIP` set as the value of `ControlIP` from the `server.json`
 - `PrivatePort` set as the value of `ControlPort` from the `server.json`
 - `ServerID` set this to the value of your new private server `ID`
 - `PrivateCert` set as the path to `server.crt` downloaded in step 2
 - `EnableDefaultRoute` set to `true` if you want to route all network traffic

<b>NOTE</b>: This information is only stored locally on your computer. Tunnels does not know the location of your VPN servers.

# Step 5
Navigate to `Private` in the `Tunnels UI`, find your new private server and select `assign`.
This will give you a list of available `Tunnels`, select the one you just created.
