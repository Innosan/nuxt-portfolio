module.exports = {
	theme: {
		extend: {
			keyframes: {
				gradientBackground: {
					"0%": { "background-position": "0% 0%" },
					"25%": { "background-position": "100% 0%" },
					"50%": { "background-position": "100% 100%" },
					"75%": { "background-position": "0% 100%" },
					"100%": { "background-position": "0% 0%" },
				},
			},
			animation: {
				gradientBackground: "gradientBackground 5s ease infinite",
			},
			backgroundSize: {
				"400%": "400% 400%",
			},
		},
	},
	plugins: [],
};
