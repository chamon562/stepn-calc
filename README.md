## STEPN CALCULATOR

### Whats needed
- crypto api to get information on the coin GST and GMT
- current price of GST and GMT and convert to US currency, yen, aussie money, euros
- we need the equation on how much is earned per walk
- take in the stats of the shoe, the level, the rarity, and how much energy.  
- the app should take in how much the user invested in
- show much they will make per day
- how long it will take to get back their returns. 
## Installation Client
- npm install axios 

## Installation Server
- npm i express


## installing Tailwind CSS for create-react-app
(https://tailwindcss.com/docs/guides/create-react-app)[url]
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- inside tailwind.config.js
```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file. index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Run your build process with npm run start.