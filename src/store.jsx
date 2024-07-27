const DATA = "data_";
import { MdSettings } from 'react-icons/md'

var STORE = {
	Name: "Niceland",
	PayPalInputs: {},
	HomepageAnimationTags: [
		"homepage-0",
		"homepage-1",
		"homepage-2",
		"homepage-3",
		"homepage-4",
		"homepage-5",
		"homepage-6",
		"homepage-7",
		"homepage-8",
		"homepage-9",
	],
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
	PrintCodes() {
		Object.keys(STORE.Config.affiliateCodes).forEach(c => {
			try {
				console.log(c, atob(c))
			} catch (e) {
			}
		});
	},
	GoodJobFindingThis(honey) {
		if (STORE.Config.affiliateCodes[btoa(honey)]) {
			return true
		} else {
			return false
		}
	},
	LoadNewCSSToStore: function(newCSS) {
		STORE.CSS = {
			...STORE.TEMPLATE_CSS,
			...newCSS
		}
	},
	Content: {
		Features: {
			"NoLogging": {
				icon: MdSettings,
				title: "No-Logging Policy",
				short: "Niceland does not track any user activity in any form. The most important functionality of Niceland is not knowing anything about our users. You can't share what you don't have.",
				long: "",
			},
			"AnonymousMetaData": {
				icon: MdSettings,
				title: "Anonymous MetaData",
				short: "Session data and meta-data is something many VPN users are worried about. Niceland is designed with a custom Tag-Routing protocol which keeps any session information anonymous. Additionally Niceland does not keep any session data or meta data after users have disconnected.",
				long: "",
			},
			"AnonymousAccounts": {
				icon: MdSettings,
				title: "Anonymous User Acccounts",
				short: "In order to protect our users anonymity, we offer account registration using usernames or pre-generated tokens.",
				long: "",
			},
			"CashPayments": {
				icon: MdSettings,
				title: "Cash Payments",
				short: "Users can pay for an account using mail-in cash, this adds another layer of anonymity to user accounts for individuals that want to go the extra mile.",
				long: "",
			},
			"PaymentProcessor": {
				icon: MdSettings,
				title: "Payment Processor Direct Connection",
				short: "To prevent excessive data collection Niceland decided to not use any 3rd party payment processing platforms like PayPal or stripe. Instead, we have a direct contract with a payment processor in Iceland.",
				long: "",
			},
			"OffsitePaymentProcessing": {
				icon: MdSettings,
				title: "Offsite Payment Processing",
				short: "Recurring payments are processed on an off-site server. This means that once the initial payment has been made, subsequent payments will be processed in an isolated environment in order to reduce the risk of interference from malicious actors.",
				long: "",
			},
			"ProtectedKeys": {
				icon: MdSettings,
				title: "Protected Key Exchanges",
				short: "Encryption key exchanges between users and the VPN is protected by an additional layer of encryption. This means that the public keys are not visible in network inspection.",
				long: "",
			},
			"DNSLeaks": {
				icon: MdSettings,
				title: "DNS Leak Prevention",
				short: "All DNS traffic is forwarded through Niceland in order to protect users' privacy. Users can pick whichever DNS server they want to use by changing their DNS settings in the Niceland App.",
				long: "",
			},
			"IPv6Leaks": {
				icon: MdSettings,
				title: "IPv6 Leak prevention",
				short: "Niceland does not support IPv6, and to prevent your IPv6 from leaking we disable it whenever you connect.",
				long: "",
			},
			"DoubleVPN": {
				icon: MdSettings,
				title: "Default Double VPN",
				short: "Niceland uses what is called Double VPN as its default mode of transport. What that means is your internet traffic will travel through two separate servers or IPs before reaching the internet.",
				long: "",
			},
			"TwoFactorAuthentication": {
				icon: MdSettings,
				title: "Two-Factor Authentication",
				short: "Standard email/password authentication is sometimes not enough to keep your accounts safe, which is why Niceland enables users to activate Two-Factor Authentication for their accounts.",
				long: "",
			},
			"GuaranteedBandwidth": {
				icon: MdSettings,
				title: "Minimum Bandwidth Guarantee",
				short: "Instead of over-crowding servers with users, Niceland only places a limited number of users on each server. With our custom built algorithms we do our best to ensure every user has enough bandwidth to enjoy the internet without interruption.",
				long: "",
			},
			"Multithreading": {
				icon: MdSettings,
				title: "Multi-threaded VPN",
				short: "Nicelands core systems are multi-threaded, which allows us to squeeze more performance out of our servers.",
				long: "",
			},
			"UniqueBuffersAndTunnels": {
				icon: MdSettings,
				title: "User dedicated Tunnels",
				short: "Each user on Niceland's VPN system gets his own dedicated TCP Tunnel and processing buffers. This allows for more stability for individual users' connections and offer greater insulation between user tunnels.",
				long: "",
			},
			"NoPersistanceService": {
				icon: MdSettings,
				title: "None-Persistent Software",
				short: "Nicelands APP was designed to not leave any running background services on your device once the app has been closed. This makes Niceland's footprint on your device even smaller.",
				long: "",
			},
			"CrossContinent": {
				icon: MdSettings,
				title: "Cross-Continent Speed Up",
				short: "When possible Niceland will send your traffic across continents using private datacenter routes. These private routes have a higher capacity for bandwidth than the public internet and in some cases can provide a boost in internet speed.",
				long: "",
			},
			"CustomDNS": {
				icon: MdSettings,
				title: "User Selected DNS",
				short: "Unlike many other VPNs, Niceland does not offer its own DNS services but instead lets users pick which DNS services they  want to use.",
				long: "",
			},
			"SandboxedUserActions": {
				icon: MdSettings,
				title: "Sandboxed User Action",
				short: "User registration and payments are only possible within the Niceland VPN app. This is to increase security and to prevent malicious web browser activity interacting with Nicelands Users.",
				long: "",
			},
			"DomainBlocking": {
				icon: MdSettings,
				title: "Optional Domain Blocking",
				short: "Niceland VPN uses various domain blocking lists to improve the browsing experience of it's users. These block lists include things like Ads, Malware, Adult Content, Fake news, Gamling and various other content types that users might want to avoid while browsing the internet.",
				long: "",
			},
			"FastIPTurnover": {
				icon: MdSettings,
				title: "Fast IP Turnover",
				short: "VPN server IP Addresses get blocked all the time. To combat this NicelandVPN was designed to run on smaller servers that can easily be replaced. Rotating IP Addresses is often not enough since they are likely on the same network, hence switching servers completely is a more efficient tactic.",
				long: "",
			},
			"FirewallPenetration": {
				icon: MdSettings,
				title: "Firewall Penetration",
				short: "NicelandVPN runs on a custom routing protocol that is designed to penetrate firewalls. While using NicelandVPN all of your network traffic looks like you are talking to a website (HTTPS).",
				long: "",
			},
			"BUSINESS-SimpleSetup": {
				icon: MdSettings,
				title: "Simple Setup",
				short: "The VPN does not require any port-forwarding or network configurations. The VPN will connect outwards to a pre-configured Niceland router.",
				long: "",
			},
			"BUSINESS-UnlimitedUsers": {
				icon: MdSettings,
				title: "No User Limits",
				short: "The number of users connected to each VPN is only limited by the amount of bandwidth given to the VPN. This configuration can be controlled via a simple configuration setting. Additionally, each user can be allocated a certain amount of minimum guaranteed bandwidth.",
				long: "",
			},
			"BUSINESS-CustomDNS": {

				icon: MdSettings,
				title: "Custom DNS Records",
				short: "VPNs can register custom DNS Records within the VPN network. These records can be used to quickly access file servers, databases or any development environments.",
				long: "",
			},
			"BUSINESS-NAT": {
				icon: MdSettings,
				title: "Network NAT",
				short: "NAT configurations can be applied to the VPN networks. This will help prevent IP conflicts which tend to happen when within a corporate environment.",
				long: "",
			},
			"BUSINESS-ToggleAccess": {
				icon: MdSettings,
				title: "Controlled Internet/Local Access",
				short: "Internet and Local network access can be toggled on or off with a simple press of a button.",
				long: "",
			},
			"BUSINESS-BlackWhiteListing": {
				icon: MdSettings,
				title: "Security by Default",
				short: "All sub-networks are blocked by default. In order to give users access to a certain network, a whitelist must be generated for the VPN. This prevents default deployments from giving global access to networks.",
				long: "",
			},

			// PRIVATE VPN FEATURES
			"PRIVATE-NoPortForwarding": {
				icon: MdSettings,
				title: "No Port Forwarding",
				short: "The private VPN does not require any router modification, instead it will create an outgoing connection to Niceland's network.",
				long: "",
			},
			"PRIVATE-UnlimitedUsers": {
				icon: MdSettings,
				title: "Unlimited User Invites",
				short: "Any user that has a Niceland VPN subscription can be invited to access private VPN by their owners. No additional payments required.",
				long: "",
			},
			"PRIVATE-CustomDNS": {
				icon: MdSettings,
				title: "Custom DNS Records",
				short: "Private VPN owners can register custom DNS Records within the private VPN network. These records are only visible to users with access to the private network.",
				long: "",
			},
			"PRIVATE-NAT": {
				icon: "https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png",
				icon: MdSettings,
				title: "Private Network NAT",
				short: "Private VPN owners can apply NAT configurations to the VPN network. This configurations will prevent IP conflicts between known local network IP Addresses.",
				long: "",
			},
			"PRIVATE-ToggleAccess": {
				icon: MdSettings,
				title: "Controlled Internet/Local Access",
				short: "Private VPN owners have the ability to turn on/off local area or internet acces from their VPN network as needed.",
				long: "",
			},
			"PRIVATE-BlackWhiteListing": {
				icon: MdSettings,
				title: "White/Blacklisting of networks",
				short: "Access to sub-networks can be white/blacklisted depending on the VPN networks owner's needs.",
				long: "",
			},
			"GEOUnblocking": {
				icon: MdSettings,
				title: "Unlock Your Favourite Content",
				short: "Unlocking GEO-blocked content is something VPN users have come to expect. Niceland intercepts all DNS queries and re-writes the IP information, then forwards those DNS queries through the encrypted user connections. Additionally Niceland has fewer users per VPN server, making it less likely to get blocked.",
				long: "",
			},
			// TO BE ANNOUNCED / LAUNCHED
			"PersistentSessions": {
				icon: MdSettings,
				title: "Persistent Sessions",
				short: "Niceland offers users the ability to purchause persistent session on VPN servers. This means that even when disconnected, Niceland saves you a spot on your selected VPN server.",
				long: "",
			},
			"CryptoPayments": {
				title: "Crypto Currency Payments",
				icon: MdSettings,
				short: "We are currently looking into different crypto currency payment platforms. We want to support as many crypto currencies as possible, but Bitcoin, Etherum and Monero are a must.",
				long: "",
			},
			"GamingMode": {
				title: "Cross-Continent Gaming",
				icon: MdSettings,
				short: "Niceland VPN was designed to route user traffic using private datacenter networks. These networks often have better latency, more bandwidth and less restrictions than the public internet. We will be using this functionality to create a Gaming Mode for Niceland VPN later this year.",
				long: "",
			},
			"IncreasedMinimumBandwidth": {
				icon: MdSettings,
				title: "More User Bandwidth",
				short: "In a few weeks, users will be able to purchase additional minimum bandwidth in increments of 5mbps.",
				long: "",
			},
			"PrivateVPN": {
				icon: MdSettings,
				title: "Private VPN for the Home",
				short: "Niceland will be announcing a private VPN for homes which connects directly to the global Mesh network. This VPN will include custom DNS records, NAT capabilities, network White/Black listing and User access control.",
				long: "",
			},
			"iOSAPP": {
				icon: MdSettings,
				title: "Niceland iOS + Apple TV App",
				short: "Developing a VPN for iPhones is tricky, they do not let developers have the same level of control as Android which makes it hard to guarantee the same level of security. However, due to popular demand we are going to offer an iOS VPN solution that has the highest level of security possible.",
				long: "",
			},
			"AndroidAPP": {
				icon: MdSettings,
				title: "Niceland Android + TV App",
				short: "The next major development project for Niceland will be an Android mobile app. Development on the app will start soon after official product launch.",
				long: "",
			},
			"DetailedDocs": {
				icon: MdSettings,
				title: "Detailed Technical Documentation",
				short: "Most VPNs do not share technical details when it comes to their implementation. Niceland will try to share as much technical detail as possible via more detailed text and visual descriptions on the website.",
				long: "",
			},
			"SecurityAudit": {
				icon: MdSettings,
				title: "3rd Party Security Audits",
				short: "Niceland will be subject to 3rd party security audits once we have enough revenue to pay for them.",
				long: "",
			},
			"OpenSource": {
				icon: MdSettings,
				title: "Open Source Client",
				short: "The Niceland App will be open sourced in the coming weeks. Before we can open source the app, we will need to set up proper procedures for community contributions and bug reporting.",
				long: "",
			},
			"StandAloneCLI": {
				icon: MdSettings,
				title: "Stand Alone CLI / TUI",
				short: "Niceland VPN will be available as a stand-alone and portable CLI application soon after launch. We want terminal lovers to to be able to launch the VPN without the need of a GUI.",
				long: "",
			},
			"LinuxSecuritySigning": {
				icon: MdSettings,
				title: "Linux security signing",
				short: "The Windows and MacOS applications are already signed with verified certificates, but the Linux app still needs security signing implementations. This will be a top priority in the coming days.",
				long: "",
			},
			"PortForwarding": {
				icon: MdSettings,
				title: "Port Forwarding",
				short: "Being able to forward ports enables users to share websites and private servers with other users without the risk of exposing their own IP address.",
				long: "",
			},
			"RouteOnlyVPN": {
				icon: MdSettings,
				title: "Custom Route VPN",
				short: "Being able to forward specific routes/IP Addresses and not others is a feature requested by many system administrators and we are happy to announce that it is officially on the roadmap.",
				long: "",
			},
			"HardwareCompatibility": {
				icon: MdSettings,
				title: "Hardware Compatibility",
				short: "Running VPNs on a router or modem is common these days. We want that to be the case for NicelandVPN as well. ",
				long: "",
			},
		},
	},
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
