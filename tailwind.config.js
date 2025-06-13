module.exports = {
  content: [
    "./**/*.html",   
    "./**/*.js",     
    "./assets/css/**/*.css",  
  ],
theme: {
          extend: {
            fontSize: {
              "base-mini": "18px",
              base: "27px",
            },
            colors: {
              primary: "#2B892E",
              secondary: "#3D3D3D",
              "secondary-two": "#BDBDBD",
              "secondary-three": "#DCDCDC",
            },
            backgroundImage: {
              "grid-bg": "url('./assets/images/grid-bg.png')",
              "hero-bg": "url('./assets/images/bg-hero.png')",
              "grid-bento": "url('./assets/images/bento/grid-bento.png')",
              "grid-bento-2": "url('./assets/images/bento/grid-bento-2.png')",
            },
          },
        },
  plugins: [],
}

// ==== 925DEV ====