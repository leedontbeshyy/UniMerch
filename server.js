const app = require('./src/app');
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running `);
});