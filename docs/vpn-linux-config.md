# Useful Linux Configurations
These are recommended configurations and good to have tool when running your own VPN server

# Good to have tool for debuggin
```bash
$ apt install net-tools tcpdump vim htop iftop
```

# Sysctl configurations

### /etc/sysctl.conf
```bash
net.ipv4.tcp_rmem=8192 32768 655360
net.ipv4.tcp_wmem=8192 32768 655360
net.ipv4.tcp_mtu_probing=0

net.core.default_qdisc=fq
net.ipv4.tcp_timestamps=0
net.ipv4.tcp_sack=1
#net.ipv4.tcp_congestion_control=bbr
net.ipv4.tcp_congestion_control=bbr

net.core.optmem_max=65536000
net.core.rmem_max = 268435456
net.core.rmem_default = 1048576
net.core.wmem_max = 268435456
net.core.wmem_default = 1048576
net.core.netdev_max_backlog = 300000
net.ipv4.udp_mem = 19257652 19257652 19257652
net.ipv4.udp_rmem_min = 8192
net.ipv4.udp_wmem_min = 8192
net.core.optmem_max = 25165824
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0

fs.file-max= 2097152

net.ipv6.conf.default.disable_ipv6=1
net.ipv6.conf.all.disable_ipv6=1
net.ipv4.ip_local_reserved_ports = 2000-65500
net.ipv4.ip_local_port_range = 1024 1999

net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
```

# Supervisor
Supervisor helps run binaries in the background and helps with log rotation.
```bash
$ apt install supervisor
```

### /etc/supervisor/conf.d/tunnels.conf
```bash
[program:tunnels]
command=/opt/tunnels/tunnels

autostart=true
autorestart=true
startretries=1000
user=[select user]
directory=/opt/tunnels
redirect_stderr=true
stdout_logfile=/var/log/tunnels/tunnels.log
stdout_logfile_maxbytes=100MB
stdout_logfile_backups=100
stderr_logfile=/var/log/tunnels/tunnels.log
stderr_logfile_maxbytes=100MB
stderr_logfile_backups=100
```
