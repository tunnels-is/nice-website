# Useful Linux Configurations
These are recommended configurations and good to have tool when running your own VPN server

# Good to have tool for debuggin
```bash
$ apt install net-tools tcpdump vim htop iftop
```

# Sysctl configurations

### /etc/sysctl.conf
```bash
net.core.optmem_max=524288
net.core.rmem_max=524288
net.core.wmem_max=524288
net.ipv4.tcp_rmem=16384 32768 65535
net.ipv4.tcp_wmem=16384 32768 65535
net.ipv4.tcp_mtu_probing=0
net.core.default_qdisc=fq
net.ipv4.tcp_timestamps=0
net.ipv4.tcp_sack=1
net.ipv4.tcp_congestion_control=cubic
fs.file-max=1000000
net.ipv4.ip_local_reserved_ports = 2000-65500
net.ipv4.ip_local_port_range = 1024 1999
net.ipv6.conf.default.disable_ipv6=1
net.ipv6.conf.all.disable_ipv6=1
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
