# Setting up your private server
THIS GUIDE IS NOT COMPLETE.. we are working on it <3

## Requirements 
 - Server with public IP 
    - preferably two IPs for maximum performance
 - Linux operating system 
    - Confirned to work on ubuntu/debian at this time
 - iptables installed

## High level setup process
NOTE: we are working on making the setup simpler.

 1. Run `$ ./tunnels-server config`
    - Creates `server.json`
    - Creates `server.crt` / `server.key`
    - Add the `controller.crt` to the same directory as your binary
    - NOTE: These might not always be perfect, please review them after they have been generated
 2. Create your server in the Tunnels UI
    - We will update the `server.json` with your new server ID
 3. Extract serial number from certificate
    - Run `$ openssl x509 -in server.crt -noout -serial | sed -n 's/serial=//p' | sed 's/://g'` 
 4. Update the private server `Serial` in the Tunnels UI
 5. Update the `ID` in the `server.json` with the `ID` from your private server in the Tunnels UI
 6. Setup `sysctl.conf` and `iptables` ( example below )
    - Run: $ iptables -I OUTPUT -p tcp --src {interface_IP} --tcp-flags ACK,RST RST -j DROP
    - Copy the `sysctl.conf` example below to `/etc/sysct.conf`
    - you CAN skip this step, but it's not recommended.
 7. Run the server 
 8. Download the `server.crt` to your computer
 9. Create a `Tunnel` using the Tunnels UI
    - Set `Private` to `true`
    - Set the `PrivateIP` and `PrivatePort` to your servers ControlIP and ControlPort as seen in the `server.json`
    - Set `PrivateCert` to the location of the `server.crt` you downloaded from the server
 10. Connect to your new tunnel

## Example `server.json` config
```json
{
	"ID": "66c07bba1f4c7f0424496666",
	"InterfaceIP": "192.168.1.11",
	"ControlIP": "192.168.1.10",
	"ControlPort": "444",
	"DataPort": "443",
	"UserMaxConnections": 4,
	"StartPort": 2000,
	"EndPort": 65500,
	"AvailableMbps": 1000,
	"AvailableUserMbps": 10,
	"InternetAccess": true,
	"LocalNetworkAccess": true,
	"DNSAllowCustomOnly": false,
	"DNS": [
        {
            "Domain":"file-server.local",
            "Wildcard":true,
            "IP":["10.10.10.20"]
        }
    ],
	"Networks": [
        {
            "Tag":"local-network",
            "Network":"192.168.1.1/24",
            "Nat":"10.10.10.1/24",
            "Routes":[]
        }
    ],
	"DNSServers": [
		"9.9.9.9",
		"1.1.1.1"
	],
	"SignKey": "controller.crt",
	"ControlCert": "server.crt",
	"ControlKey": "server.key",
	"AutoCert": true,
}

```
