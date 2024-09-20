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
			Basic: {
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
				IPV6Blocking: {
					Title: "IPv6 Leak Prevention",
					Content: "Niceland can be configured to deny connections if IPv6 is enabled",
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
				Torrenting: {
					Title: "Torrent Friendly Servers",
					Content: "Niceland offers special servers which are torrent friendly",
					Icon: LayersIcon,
				},

			},
			Advanced: {
				CommunitySourceAccess: {
					Title: "Not So Source Available?",
					Content: "Join the community to gain access to our source code",
					Icon: LayersIcon,
				},
				NicelandOnOpenWRT: {
					Title: "Niceland on OpenWRT",
					Content: "Our NAT protocol was designed to work on unix based router firmware",
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
				OptimizedSoftware: {
					Title: "Multi-threaded & modern language",
					Content: "Niceland is built from the ground up using Golang, a multi-threaded modern programming language",
					Icon: LayersIcon,
				},
				PerUserEncryptedStreams: {
					Title: "Isolated Streams",
					Content: "Every end-to-end connection uses tried and true encryption method and unique encryption keys",
					Icon: LayersIcon,
				},
			},
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
			ReducedAttackSurface: {
				Title: "Minimal Attack Surface",
				Content: "Niceland eliminates the need for exposed ports, our edge nodes use reverse tunneling to form per-user encrypted streams",
				Icon: LayersIcon,
			},
			SecurityAndAuditing: {
				Title: "?",
				Content: "?",
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
	base_url: "https://raw.githubusercontent.com/tunnels-is/nice-website/main/docs/",
	DocMenu: [
		{ tag: "Introduction", file: "introduction.md", indent: 0, },
		{ tag: "Downloading", file: "downloading.md", indent: 2, },
		{ tag: "Registering", file: "registering.md", indent: 2, },
		{ tag: "Connecting", file: "connecting.md", indent: 2, },
		{ tag: "Disconnecting", file: "disconnecting.md", indent: 2, },

		{ tag: "Advanced", file: "advanced.md", indent: 0, },
		{ tag: "Routes", file: "routes.md", indent: 2, },
		{ tag: "DNS", file: "dns.md", indent: 2, },

		{ tag: "", file: "seperator", indent: 0, },

		{ tag: "Advanced", file: "advanced.md", indent: 1, },
		{ tag: "Advanced", file: "advanced.md", indent: 1, },
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
