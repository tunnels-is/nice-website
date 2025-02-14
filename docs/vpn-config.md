# Server Config Breakdown

```json
{
  "ID": "6714f2479950f0dfede56c18", // Server ID found in `Tunnels UI`
  "ControlIP": "93.95.231.66", // IP used for connecting
  "ControlPort": "444", // Port used for connection
  "UserMaxConnections": 4, // Maximum concurrent user connections
  "InterfaceIP": "93.95.231.66", // Actual VPN IP
  "DataPort": "443", // Port used for receiving/sending packets to client
  "StartPort": 2000, // Start port for NAT
  "EndPort": 65500, // End port for NAT
  "AvailableMbps": 1000, // Available total bandwidth in Megabits per second
  "AvailableUserMbps": 10, // Minimum allocated bandwidth per user in Megabits per second
  "InternetAccess": true, // Toggles internet access for VPN users
  "LocalNetworkAccess": true, // Toggles local network access for VPN users
  "DNSAllowCustomOnly": false, // Prevents non-custom DNS queries from resolving on this network
  "AdminEntities":["device-key", "user-id"], // Admin entities are DeviceKeys or UserIDs that are allowed to bypass the VPN Firewall
  "DNS": [ // Custom DNS records ( can be over-written in the tunnel config )
    {
      "Domain": "meow.com", // custom DNS record
      "Wildcard": true, // Enabling wildcard will resolve any sub-domain to the current config
      "TXT": ["text record 1", "text record 2"],
      "IP": ["10.10.10.15", "10.10.10.14"],
      "CNAME": ""
    }
  ],
  "Networks": [ // Custom Network settings ( can be over-written in the tunnel config )
    {
      "Tag": "default",
      "Network": "93.95.231.66/24", // The server side network
      "Nat": "10.10.10.1/24", // The client side NAT network
      "Routes": [
         {
            "Address":"1.1.1.1/32", // Custom route addeed when connecting
            "Metric":"0"
         }
      ]
    }
  ],
  "DNSServers": [ // DNS servers used when resolving on this VPN network ( can be over-written in the tunnel config )
    "1.1.1.1",
    "8.8.8.8"
  ],
  "ControlCert": "./server.crt",
  "ControlKey": "./server.key"
}

```
