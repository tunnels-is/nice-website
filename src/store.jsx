const DATA = "data_";
import { LayersIcon } from '@radix-ui/react-icons';
const Version = "v2.1.0"

var STORE = {
	Name: "Niceland",
	Content: {

		Download: {
			Title: "Download Niceland",
			Subtitle: "click here for all available releases",
			AllLink: "https://github.com/tunnels-is/NicelandVPN/releases/latest",
			MacOS: "https://github.com/tunnels-is/NicelandVPN/releases/download/" + Version + "/NicelandVPN-MacOS-app.zip",
			Windows: "https://github.com/tunnels-is/NicelandVPN/releases/download/" + Version + "/NicelandVPN-Windows-app.exe",
			Linux: "https://github.com/tunnels-is/NicelandVPN/releases/latest",
		},

		Home: {
			Banner: {
				Title: "Some awesome title",
				Subtitle: "lightweight - route-based -  vpn",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/web/home-banner-2.png",
				Img2: "https://raw.githubusercontent.com/tunnels-is/media/master/web/orgs.png",
				Img3: "https://raw.githubusercontent.com/tunnels-is/media/master/web/home-banner-3.png",
			},

			TriForce: {
				Content1: "16MB on disk",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/web/size-on-disk.png",
				Content2: "15MB in Memory",
				Img2: "https://raw.githubusercontent.com/tunnels-is/media/master/web/size-in-memory.png",
				Content3: "Just Download And Run",
				Img3: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png",
			},

			ReverseTriForce: {
				Content1: "Security and privacy focused for individuals",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/web/all-connections.png",
				Content2: "Flexible network functionality for Developers",
				Img2: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png",
				Content3: "Simple deployments and reduced attack surface for Enterprise",
				Img3: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png",
			},

			ImageLeft1: {
				Title: "The individual",
				Content: "Niceland has all the privacy and security features users have come to expect. No logging, no tracking, no spying. Only tried and true encryption algorithms as implemented by security experts are used",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/home-banner-2.png",
			},

			ImageRight1: {
				Title: "10x Developers",
				Content: "For developers, we have implemented an extensive list of features to allow multi-network connectivity without any DNS problems. Connect to and control multiple cloud/datacenter environments are the same time",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/all-connections.png",
			},

			ImageLeft2: {
				Title: "Enterprise",
				Content: "Niceland has been optimized for large scale deployments and easy user access control. Full-scale on premis deployments can benefit from a reduced attack surface via a special reverse networking method",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/orgs.png",
			},

			ImageRight2: {
				Title: "Dark Mode!",
				Content: ".... TBD",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/home-banner-1.png",
			},
		},
		Individual: {
			SmallBanner: {
				Title: "For Security And Privacy",
				Subtitle: "No logging, no tracking, no spying.",
			},
			TextImageLeft: {
				Title: "DNS Protection",
				Content: "Protect your DNS queries with Niceland's in-build DNS proxy. Transform your DNS to DNS over HTTPS, block domains based on categories, inspect your DNS history, receive daily block list updates and more..",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/dns-lists.png",

			},
			TextImageRight: {
				Title: "TODO: SOMETHING JUICY",
				Content: "....",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"
			},

		},
		Developers: {
			SmallBanner: {
				Title: "Multi-Network VPN",
				Subtitle: "Manage all your environments in one place",
			},
			TextImageLeft: {
				Title: "Multi Tenancy",
				Content: "Using Niceland you can connect to multiple VPN networks at the same time, resolve NAT conflicts and register custom DNS records using simple json configs",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/home-banner-3.png",
			},
			TextImageRight: {
				Title: "Fully Customizable",
				Content: "All configuration are editable as JSON configs. We have built a code editor into the application, but you can edit these configs with any editor of your choosing",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/inline-editor.png"
			},
			TextImageLeft2: {
				Title: "Custom DNS, NAT and Routes",
				Content: "Niceland can fully control nat, routers and custom dns on the client side as well as on the server side, letting you resolve issues effortlessly",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/nat-route-dns.png",
			},

		},
		Enterprise: {
			SmallBanner: {
				Title: "????",
				Subtitle: "??????",
			},
			TextImageLeft: {
				Title: "On Premis Installations",
				Content: "Niceland support both bare-metal and container environment deployments.",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/home-banner-3.png",
			},
			TextImageRight: {
				Title: "24/7 Support",
				Content: "",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/inline-editor.png"
			},
			TextImageLeft2: {
				Title: "Be Everywhere At All Times",
				Content: "",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/nat-route-dns.png",
			},

		},

		Features: {
			EnterpriseUserManagement: {
				Title: "User Management",
				Content: "Niceland includes a group based user and endpoint management with an API interface",
				Icon: LayersIcon,
			},
			Support247: {
				Title: "24/7 Support",
				Content: "Enterprise clients receive 24/7 support via all of our support platforms",
				Icon: LayersIcon,
			},
			OnPremisInstall: {
				Title: "On Premis",
				Content: "Niceland support full on-premis deployments on bare-metal or kubernetes",
				Icon: LayersIcon,
			},

			HighlyScalable: {
				Title: "Infinite Scale",
				Content: "10 users or 100.000 users, it makes no difference, Niceland can scale to meet any needs",
				Icon: LayersIcon,
			},

			NoPersistance: {
				Title: "No System Persistence",
				Content: "Niceland does not leave any services or hidden files on your system",
				Icon: LayersIcon,
			},
			NoInstallation: {
				Title: "No Install Required",
				Content: "Just download Niceland and place it wherever you like, even on a USB.",
				Icon: LayersIcon,
			},
			AnonymousAccounts: {
				Title: "Anonymous Accounts",
				Content: "Accounts can be created using usernames or uuids. No personal information required",
				Icon: LayersIcon,
			},
			AnonymousPayments: {
				Title: "Anonymous Top-Ups",
				Content: "Niceland offers anonymous license keys which can be used to top-up your account",
				Icon: LayersIcon,
			},
			DNSTransformation: {
				Title: "Transform DNS to DoH",
				Content: "Our in-build DNS server can translate your normal DNS to DNS over HTTPS",
				Icon: LayersIcon,
			},
			DNSLeakPrevention: {
				Title: "Protect your DNS",
				Content: "Use our in-build DNS proxy to completely prevent DNS leaks, even without a Niceland account",
				Icon: LayersIcon,
			},
			DNSBlocking: {
				Title: "Block unwanted DNS queries",
				Content: "Niceland has a built in DNS blocking mechanisms, available for free",
				Icon: LayersIcon,
			},
			DNSDailyUpdates: {
				Title: "Daily DNS Blocklist Updates",
				Content: "Niceland creates combined DNS blocklists from popular sources, everyday. Users can access these sources with the press of a button",
				Icon: LayersIcon,
			},
			EverythingIncluded: {
				Title: "All developer features included",
				Content: "All developer features are included with basic subscriptions",
				Icon: LayersIcon,
			},
			OptimizedSoftware: {
				Title: "Multi-threaded modern language",
				Content: "Niceland is built from the ground up using Golang, a multi-threaded modern programming language",
				Icon: LayersIcon,
			},
			PerUserEncryptedStreams: {
				Title: "Isolated Streams",
				Content: "Every end-to-end connection uses tried and true encryption method and unique encryption keys",
				Icon: LayersIcon,
			},
			FirewallPenetration: {
				Title: "VPN Over TCP 443",
				Content: "Niceland offers VPN over TCP port 443 for those pesky situations when firwalls stand in your way of freedom",
				Icon: LayersIcon,
			},
			EasyDeploymentAtScale: {
				Title: "Niceland At Scale",
				Content: "All internal modules are deployed as single binaries without installation. Making it easy for development operations",
				Icon: LayersIcon,
			},
			EasyConfigurationAtScale: {
				Title: "Distributable Configurations",
				Content: "Niceland client apps use a JSON config which can be deployed at scale via management software",
				Icon: LayersIcon,
			},
			ServerAndClientSideNAT: {
				Title: "Flexible NAT",
				Content: "NAT Can be configured for each network, but also re-configured by the user in-case of conflicts",
				Icon: LayersIcon,
			},
			ServerAndClientSideDNS: {
				Title: "Flexible DNS",
				Content: "Unique DNS records can be configured for each network but also re-configured by the user in-case of conflicts",
				Icon: LayersIcon,
			},
			SeverAndClientSideRoutes: {
				Title: "Routing Base VPNs",
				Content: "Multiple routes can be configured be network, but also re-configured client side",
				Icon: LayersIcon,
			},
			ReducedAttackSurface: {
				Title: "Minimal Attack Surface",
				Content: "Niceland eliminates the need for exposed ports, our edge nodes use reverse tunneling to form per-user encrypted streams",
				Icon: LayersIcon,
			},
			CommunitySourceAccess: {
				Title: "Not So Source Available?",
				Content: "Join the community to gain access to our source code",
				Icon: LayersIcon,
			},
			SecurityAndAuditing: {
				Title: "?",
				Content: "?",
				Icon: LayersIcon,
			},
			Torrenting: {
				Title: "Torrent Friendly Servers",
				Content: "Niceland offers special servers which are torrent friendly",
				Icon: LayersIcon,
			},
			NicelandOnOpenWRT: {
				Title: "Niceland <3 OpenWRT",
				Content: "Our NAT protocol was designed to work on unix based router firmware",
				Icon: LayersIcon,
			}
		},
	},
	Temp: {
		Title: "Title number one",
		Content: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
		ContentSmall: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.`,
		Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png",
		ImgSmall: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png",
	},
	Menu: {
		Burger: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/menu/burger.svg",

	},
	Animators: {



	},
	Config: {
		docsLink: "https://docs.nicelandvpn.is",
		APITimeout: 20000,
		HEADERS: {
			// "X-AUTH-TOKEN": "some-authentication-token",
			"Content-Type": "application/json",
			"Accept": "*/*",
		},
		otherPayments: [
			{
				Title: "Anonymous License Key",
				Price: 9,
				URL: "https://nicelandvpn.lemonsqueezy.com/buy/e8cbc47c-c19b-4ef7-9f8a-c8e2b94597dd",
				Button: "Register Now",
				Included: ["something", "something", "something"],
			}
		],
		subs: [
			{
				Title: "1 Month",
				Per: "/ month",
				Price: 9,
				URL: "https://nicelandvpn.lemonsqueezy.com/buy/6f75871d-ea8d-46e3-927b-f62dc2453ad3",
				Button: "Register Now",
				Included: ["Support", "Money Back Guarantee", "Access all standard features"],
			},
			{
				Title: "6 Month",
				Per: "/ 6 months",
				Price: 49,
				URL: "https://nicelandvpn.lemonsqueezy.com/buy/214e7bee-3e9c-4d14-8e3d-0a96a1b48361",
				Button: "Register Now",
				Included: ["Support", "Money Back Guarantee", "Access all standard features", "Additional ???"],
			},
			{
				Title: "12 Month",
				Per: "/ 12 months",
				Price: 69,
				URL: "https://nicelandvpn.lemonsqueezy.com/buy/71bb1dd8-8fac-4d56-bfbf-63cfd6081c5a",
				Button: "Register Now",
				Included: ["Support", "Money Back Guarantee", "Access all standard features", "Additional ???", "More Additional ???"],
			}

		],

	},
	OLDContent: {
		Features: {
			"NoLogging": {
				icon: LayersIcon,
				title: "No-Logging Policy",
				short: "Niceland does not track any user activity in any form. The most important functionality of Niceland is not knowing anything about our users. You can't share what you don't have.",
				long: "",
			},
			"AnonymousMetaData": {
				icon: LayersIcon,
				title: "Anonymous MetaData",
				short: "Session data and meta-data is something many VPN users are worried about. Niceland is designed with a custom Tag-Routing protocol which keeps any session information anonymous. Additionally Niceland does not keep any session data or meta data after users have disconnected.",
				long: "",
			},
			"AnonymousAccounts": {
				icon: LayersIcon,
				title: "Anonymous User Acccounts",
				short: "In order to protect our users anonymity, we offer account registration using usernames or pre-generated tokens.",
				long: "",
			},
			"DNSLeaks": {
				icon: LayersIcon,
				title: "DNS Leak Prevention",
				short: "All DNS traffic is forwarded through Niceland in order to protect users' privacy. Users can pick whichever DNS server they want to use by changing their DNS settings in the Niceland App.",
				long: "",
			},
			"IPv6Leaks": {
				icon: LayersIcon,
				title: "IPv6 Leak prevention",
				short: "Niceland does not support IPv6, and to prevent your IPv6 from leaking we disable it whenever you connect.",
				long: "",
			},
			"DoubleVPN": {
				icon: LayersIcon,
				title: "Default Double VPN",
				short: "Niceland uses what is called Double VPN as its default mode of transport. What that means is your internet traffic will travel through two separate servers or IPs before reaching the internet.",
				long: "",
			},
			"TwoFactorAuthentication": {
				icon: LayersIcon,
				title: "Two-Factor Authentication",
				short: "Standard email/password authentication is sometimes not enough to keep your accounts safe, which is why Niceland enables users to activate Two-Factor Authentication for their accounts.",
				long: "",
			},
			"GuaranteedBandwidth": {
				icon: LayersIcon,
				title: "Minimum Bandwidth Guarantee",
				short: "Instead of over-crowding servers with users, Niceland only places a limited number of users on each server. With our custom built algorithms we do our best to ensure every user has enough bandwidth to enjoy the internet without interruption.",
				long: "",
			},
			"Multithreading": {
				icon: LayersIcon,
				title: "Multi-threaded VPN",
				short: "Nicelands core systems are multi-threaded, which allows us to squeeze more performance out of our servers.",
				long: "",
			},
			"UniqueBuffersAndTunnels": {
				icon: LayersIcon,
				title: "User dedicated Tunnels",
				short: "Each user on Niceland's VPN system gets his own dedicated TCP Tunnel and processing buffers. This allows for more stability for individual users' connections and offer greater insulation between user tunnels.",
				long: "",
			},
			"NoPersistanceService": {
				icon: LayersIcon,
				title: "None-Persistent Software",
				short: "Nicelands APP was designed to not leave any running background services on your device once the app has been closed. This makes Niceland's footprint on your device even smaller.",
				long: "",
			},
			"CrossContinent": {
				icon: LayersIcon,
				title: "Cross-Continent Speed Up",
				short: "When possible Niceland will send your traffic across continents using private datacenter routes. These private routes have a higher capacity for bandwidth than the public internet and in some cases can provide a boost in internet speed.",
				long: "",
			},
			"CustomDNS": {
				icon: LayersIcon,
				title: "User Selected DNS",
				short: "Unlike many other VPNs, Niceland does not offer its own DNS services but instead lets users pick which DNS services they  want to use.",
				long: "",
			},
			"SandboxedUserActions": {
				icon: LayersIcon,
				title: "Sandboxed User Action",
				short: "User registration and payments are only possible within the Niceland VPN app. This is to increase security and to prevent malicious web browser activity interacting with Nicelands Users.",
				long: "",
			},
			"DomainBlocking": {
				icon: LayersIcon,
				title: "Optional Domain Blocking",
				short: "Niceland VPN uses various domain blocking lists to improve the browsing experience of it's users. These block lists include things like Ads, Malware, Adult Content, Fake news, Gamling and various other content types that users might want to avoid while browsing the internet.",
				long: "",
			},
			"FastIPTurnover": {
				icon: LayersIcon,
				title: "Fast IP Turnover",
				short: "VPN server IP Addresses get blocked all the time. To combat this NicelandVPN was designed to run on smaller servers that can easily be replaced. Rotating IP Addresses is often not enough since they are likely on the same network, hence switching servers completely is a more efficient tactic.",
				long: "",
			},
			"FirewallPenetration": {
				icon: LayersIcon,
				title: "Firewall Penetration",
				short: "NicelandVPN runs on a custom routing protocol that is designed to penetrate firewalls. While using NicelandVPN all of your network traffic looks like you are talking to a website (HTTPS).",
				long: "",
			},
			"BUSINESS-SimpleSetup": {
				icon: LayersIcon,
				title: "Simple Setup",
				short: "The VPN does not require any port-forwarding or network configurations. The VPN will connect outwards to a pre-configured Niceland router.",
				long: "",
			},
			"BUSINESS-UnlimitedUsers": {
				icon: LayersIcon,
				title: "No User Limits",
				short: "The number of users connected to each VPN is only limited by the amount of bandwidth given to the VPN. This configuration can be controlled via a simple configuration setting. Additionally, each user can be allocated a certain amount of minimum guaranteed bandwidth.",
				long: "",
			},
			"BUSINESS-CustomDNS": {

				icon: LayersIcon,
				title: "Custom DNS Records",
				short: "VPNs can register custom DNS Records within the VPN network. These records can be used to quickly access file servers, databases or any development environments.",
				long: "",
			},
			"BUSINESS-NAT": {
				icon: LayersIcon,
				title: "Network NAT",
				short: "NAT configurations can be applied to the VPN networks. This will help prevent IP conflicts which tend to happen when within a corporate environment.",
				long: "",
			},
			"BUSINESS-ToggleAccess": {
				icon: LayersIcon,
				title: "Controlled Internet/Local Access",
				short: "Internet and Local network access can be toggled on or off with a simple press of a button.",
				long: "",
			},
			"BUSINESS-BlackWhiteListing": {
				icon: LayersIcon,
				title: "Security by Default",
				short: "All sub-networks are blocked by default. In order to give users access to a certain network, a whitelist must be generated for the VPN. This prevents default deployments from giving global access to networks.",
				long: "",
			},

			// PRIVATE VPN FEATURES
			"PRIVATE-NoPortForwarding": {
				icon: LayersIcon,
				title: "No Port Forwarding",
				short: "The private VPN does not require any router modification, instead it will create an outgoing connection to Niceland's network.",
				long: "",
			},
			"PRIVATE-UnlimitedUsers": {
				icon: LayersIcon,
				title: "Unlimited User Invites",
				short: "Any user that has a Niceland VPN subscription can be invited to access private VPN by their owners. No additional payments required.",
				long: "",
			},
			"PRIVATE-CustomDNS": {
				icon: LayersIcon,
				title: "Custom DNS Records",
				short: "Private VPN owners can register custom DNS Records within the private VPN network. These records are only visible to users with access to the private network.",
				long: "",
			},
			"PRIVATE-NAT": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: LayersIcon,
				title: "Private Network NAT",
				short: "Private VPN owners can apply NAT configurations to the VPN network. This configurations will prevent IP conflicts between known local network IP Addresses.",
				long: "",
			},
			"PRIVATE-ToggleAccess": {
				icon: LayersIcon,
				title: "Controlled Internet/Local Access",
				short: "Private VPN owners have the ability to turn on/off local area or internet acces from their VPN network as needed.",
				long: "",
			},
			"PRIVATE-BlackWhiteListing": {
				icon: LayersIcon,
				title: "White/Blacklisting of networks",
				short: "Access to sub-networks can be white/blacklisted depending on the VPN networks owner's needs.",
				long: "",
			},
			"GEOUnblocking": {
				icon: LayersIcon,
				title: "Unlock Your Favourite Content",
				short: "Unlocking GEO-blocked content is something VPN users have come to expect. Niceland intercepts all DNS queries and re-writes the IP information, then forwards those DNS queries through the encrypted user connections. Additionally Niceland has fewer users per VPN server, making it less likely to get blocked.",
				long: "",
			},
			// TO BE ANNOUNCED / LAUNCHED
			"PersistentSessions": {
				icon: LayersIcon,
				title: "Persistent Sessions",
				short: "Niceland offers users the ability to purchause persistent session on VPN servers. This means that even when disconnected, Niceland saves you a spot on your selected VPN server.",
				long: "",
			},
			"CryptoPayments": {
				title: "Crypto Currency Payments",
				icon: LayersIcon,
				short: "We are currently looking into different crypto currency payment platforms. We want to support as many crypto currencies as possible, but Bitcoin, Etherum and Monero are a must.",
				long: "",
			},
			"GamingMode": {
				title: "Cross-Continent Gaming",
				icon: LayersIcon,
				short: "Niceland VPN was designed to route user traffic using private datacenter networks. These networks often have better latency, more bandwidth and less restrictions than the public internet. We will be using this functionality to create a Gaming Mode for Niceland VPN later this year.",
				long: "",
			},
			"IncreasedMinimumBandwidth": {
				icon: LayersIcon,
				title: "More User Bandwidth",
				short: "In a few weeks, users will be able to purchase additional minimum bandwidth in increments of 5mbps.",
				long: "",
			},
			"PrivateVPN": {
				icon: LayersIcon,
				title: "Private VPN for the Home",
				short: "Niceland will be announcing a private VPN for homes which connects directly to the global Mesh network. This VPN will include custom DNS records, NAT capabilities, network White/Black listing and User access control.",
				long: "",
			},
			"iOSAPP": {
				icon: LayersIcon,
				title: "Niceland iOS + Apple TV App",
				short: "Developing a VPN for iPhones is tricky, they do not let developers have the same level of control as Android which makes it hard to guarantee the same level of security. However, due to popular demand we are going to offer an iOS VPN solution that has the highest level of security possible.",
				long: "",
			},
			"AndroidAPP": {
				icon: LayersIcon,
				title: "Niceland Android + TV App",
				short: "The next major development project for Niceland will be an Android mobile app. Development on the app will start soon after official product launch.",
				long: "",
			},
			"DetailedDocs": {
				icon: LayersIcon,
				title: "Detailed Technical Documentation",
				short: "Most VPNs do not share technical details when it comes to their implementation. Niceland will try to share as much technical detail as possible via more detailed text and visual descriptions on the website.",
				long: "",
			},
			"SecurityAudit": {
				icon: LayersIcon,
				title: "3rd Party Security Audits",
				short: "Niceland will be subject to 3rd party security audits once we have enough revenue to pay for them.",
				long: "",
			},
			"OpenSource": {
				icon: LayersIcon,
				title: "Open Source Client",
				short: "The Niceland App will be open sourced in the coming weeks. Before we can open source the app, we will need to set up proper procedures for community contributions and bug reporting.",
				long: "",
			},
			"StandAloneCLI": {
				icon: LayersIcon,
				title: "Stand Alone CLI / TUI",
				short: "Niceland VPN will be available as a stand-alone and portable CLI application soon after launch. We want terminal lovers to to be able to launch the VPN without the need of a GUI.",
				long: "",
			},
			"LinuxSecuritySigning": {
				icon: LayersIcon,
				title: "Linux security signing",
				short: "The Windows and MacOS applications are already signed with verified certificates, but the Linux app still needs security signing implementations. This will be a top priority in the coming days.",
				long: "",
			},
			"PortForwarding": {
				icon: LayersIcon,
				title: "Port Forwarding",
				short: "Being able to forward ports enables users to share websites and private servers with other users without the risk of exposing their own IP address.",
				long: "",
			},
			"RouteOnlyVPN": {
				icon: LayersIcon,
				title: "Custom Route VPN",
				short: "Being able to forward specific routes/IP Addresses and not others is a feature requested by many system administrators and we are happy to announce that it is officially on the roadmap.",
				long: "",
			},
			"HardwareCompatibility": {
				icon: LayersIcon,
				title: "Hardware Compatibility",
				short: "Running VPNs on a router or modem is common these days. We want that to be the case for NicelandVPN as well. ",
				long: "",
			},
		},
	},
	base_url: "https://raw.githubusercontent.com/tunnels-is/nice-website/main/docs/",
	DocMenu: [
		{ tag: "Introduction", file: "introduction.md", indent: 1, },
		{ tag: "Downloading", file: "downloading.md", indent: 2, },
		{ tag: "Registering", file: "registering.md", indent: 2, },
		{ tag: "Connecting", file: "connecting.md", indent: 2, },
		{ tag: "Disconnecting", file: "disconnecting.md", indent: 2, },

		{ tag: "Advanced", file: "advanced.md", indent: 1, },
		{ tag: "Routes", file: "routes.md", indent: 2, },
		{ tag: "DNS", file: "dns.md", indent: 2, },
	],
	GetAndSaveDomain: function() {
		let host = window.location.host
		let domain = "default"

		try {
			var hostSplit = host.split('.')
			domain = hostSplit[hostSplit.length - 1]
		} catch (error) {
			console.log("ERROR PARSING DOMAIN")
			console.dir(error)
		}

		STORE.Cache.Set("domain", domain)
		return domain
	},
	GetAndSaveSubdomain: function() {
		var host = window.location.host
		let subdomain = ""

		try {
			subdomain = host.split('.')[0]
		} catch (error) {
			console.log("ERROR PARSING FIRST SUBDOMAIN")
			console.dir(error)
		}

		STORE.Set("subdomain", subdomain)
		return subdomain
	},
	Cache: {
		Clear: function() {
			return window.localStorage.clear()
		},
		Get: function(key) {
			return window.localStorage.getItem(key)
		},
		GetBool: function(key) {
			let data = window.localStorage.getItem(key)
			if (data === "true") {
				return true
			}
			return false
		},
		Set: function(key, value) {
			window.localStorage.setItem(key, value)
		},
		Del: function(key) {
			window.localStorage.removeItem(key)
		},
		DelObject: function(key) {
			window.localStorage.removeItem(DATA + key)
			window.localStorage.removeItem(DATA + key + "_ct")
		},
		GetObject: function(key) {
			let jsonData = null
			try {
				jsonData = JSON.parse(window.localStorage.getItem(DATA + key))
				console.log("%cGET OBJECT:", 'background: lightgreen; color: black', key, jsonData)
			}
			catch (e) {
				console.log(e)
				return undefined
			}

			if (jsonData === null) {
				return undefined
			}

			return jsonData
		},
		SetObject: function(key, object) {
			try {
				console.log("%cSET OBJECT:", 'background: lightgreen; color: black', key, object)
				let data = JSON.stringify(object)
				window.localStorage.setItem(DATA + key, data)
				window.localStorage.setItem(DATA + key + "_ct", moment().unix())
			}
			catch (e) {
				console.log(e)
				alert(e)
			}

		},
	},
	SessionCache: {
		Clear: function() {
			return window.sessionStorage.clear()
		},
		Get: function(key) {
			return window.sessionStorage.getItem(key)
		},
		GetBool: function(key) {
			let data = window.sessionStorage.getItem(key)
			if (data === "true") {
				return true
			}
			return false
		},
		Set: function(key, value) {
			window.sessionStorage.setItem(key, value)
		},
		Del: function(key) {
			window.sessionStorage.removeItem(key)
		},
		DelObject: function(key) {
			window.sessionStorage.removeItem(DATA + key)
			window.sessionStorage.removeItem(DATA + key + "_ct")
		},
		GetObject: function(key) {
			let jsonData = null
			try {
				jsonData = JSON.parse(window.sessionStorage.getItem(DATA + key))
				console.log("%cGET OBJECT:", 'background: lightgreen; color: black', key, jsonData)
			}
			catch (e) {
				console.log(e)
				return undefined
			}

			if (jsonData === null) {
				return undefined
			}

			return jsonData
		},
		SetObject: function(key, object) {
			try {
				console.log("%cSET OBJECT:", 'background: lightgreen; color: black', key, object)
				let data = JSON.stringify(object)
				window.sessionStorage.setItem(DATA + key, data)
			}
			catch (e) {
				console.log(e)
				alert(e)
			}

		},
	},

};


export default STORE;
