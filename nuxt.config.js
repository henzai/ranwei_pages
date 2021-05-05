require("dotenv").config();
const env = process.env;

export default {
  target: "static",
  buildModules: ["@nuxtjs/dotenv", "@nuxt/typescript-build"],
  plugins: ["~/plugins/firebase.client.ts"],
  env: {
    APIKEY: env.APIKEY,
    AUTHDOMAIN: env.AUTHDOMAIN,
    PROJECTID: env.PROJECTID,
    STORAGEBUCKET: env.STORAGEBUCKET,
    MESSAGINGSENDERID: env.MESSAGINGSENDERID,
    APPID: env.APPID,
    MEASUREMENTID: env.MEASUREMENTID,
  },
};
