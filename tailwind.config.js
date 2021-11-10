module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				"landing-bg-image":
					"url('/src/static_files/Landing-Page-Bg.png')",
				"intro-bg-image":
					"url('/src/static_files/Perks_Page_Bg.png')",
				"intro-line":
					"url('/src/static_files/Intro_Line.png')",

				"charity-bg-image":
					"url('/src/static_files/Charity_Page_Bg.png')",
				"charity-bg-image-mobile":
					"url('/src/static_files/Charity_Page_Bg_Mobile.png')",
				"team-bg-image":
					"url('/src/static_files/Team_Page_Bg.png')",
				"team-bg-image-mobile":
					"url('/src/static_files/Team_Page_Bg_Mobile.png')",
				"showcase-bg-image":
					"url('/src/static_files/Showcase_Page_Bg.png')",
				"showcase-bg-image-mobile":
					"url('/src/static_files/Showcase_Page_Bg_Mobile.png')",
				"footer-bg-image":
					"url('/src/static_files/Foot_Page_Bg.png')",
			},
			fontFamily: {
				Oswald: ["Oswald", "sans-serif"],
			},
			colors: {
				"landing-button-color": "#FFB506",
				"landing-text-color": "#FFE600",
				"intro-first-text-color": "#442D15",
				"intro-second-text-color": "#7B3F00",
				"intro-line-color": "#A65603",
				"charity-first-text-color": "#694190",
				"road-map-bg-color": "#453754",
				"road-map-text-title-color": "#EEE6D3",
				"FAQ-bg-color": "#FFEBFE",
				"FAQ-text-color": "#453754",
				"FAQ-border-color": "#B134FF",
				"showcase-text-color": "#6F238A",
				"team-border-color": "#63B5ED",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
