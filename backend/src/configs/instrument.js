import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://d5972fe5c964d4e60a572d891aeabe85@o4511723524587520.ingest.us.sentry.io/4511723530616832",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
  sendDefaultPii: true,
});