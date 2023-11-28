module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        graph: "url('../img/graph-paper.svg')",
        topo: "url('../img/topography.svg')",
        "topo-dark": "url('../img/topography copy.svg')",
        blob: "url('../img/blob.svg')",
      },
      colors: {
        first: "#F1ECC3",
        second: "#C9D8B6",
        third: "#57837B",
        fourth: "#515E63",
        "custom-yellow": "#F8CF3E",
        "custom-yellow-bright": "#FBE186",
        "neon-dark": "#170055",
        "neon-primary": "#3E00FF",
        "neon-second": "#AE00FB",
        "neon-third": "#B5FFD9",
      },
      fontFamily: {
        clash: ["ClashDisplay-Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
