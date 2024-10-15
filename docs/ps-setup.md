# Setting up your private server
THIS GUIDE IS NOT COMPLETE.. we are working on it <3

## Requirements 
 - Server with public IP 
    - preferably two IPs for maximum performance
 - Linux operating system 
    - Confirned to work on ubuntu/debian at this time
 - iptables installed

## High level setup process
 1. Create the Private server in the Tunnels UI
    - Remember to register the serial number later
 2. Run `$ ./tunnels-server config`
    - Creates server.json 
    - Creates server.crt / server.key
    - NOTE: These might not always be perfect, please review them after they have been generated
 3. Extract serial number from certificate
    - Run `openssl x509 -in server.crt -noout -serial | sed -n 's/serial=//p' | sed 's/://g'` 
    - Update your server in the Tunnels UI
 4. Setup sysctl.conf
 5. Configure your router to forward a port to the server
 6. Run the server 
 7. Download the certificate to your laptop
 8. Create a local tunnel to the server
    - remember to insert the certificate
 7. Connect to the server


## Step 1: Sysctl.conf
```bash
net.core.rmem_max=65536000
net.core.wmem_max=65536000
net.ipv4.tcp_rmem=65536 196608 655360
net.ipv4.tcp_wmem=65536 196608 655360
net.ipv4.tcp_mtu_probing=0
net.core.default_qdisc=fq
net.core.optmem_max=65536000
net.ipv4.tcp_timestamps=0
net.ipv4.tcp_sack=0
net.ipv4.tcp_congestion_control=cubic
fs.file-max=500000
net.ipv4.ip_local_reserved_ports = 2000-65500
net.ipv4.ip_local_port_range = 1024 1999
net.ipv6.conf.default.disable_ipv6=1
net.ipv6.conf.all.disable_ipv6=1
```

## Step 2: Setup Your Config
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
