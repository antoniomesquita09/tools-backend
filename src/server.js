const asciify = require('asciify-image');
const app = require('./app');

app.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  try {
    const options = {
      fit: 'box',
      width: 50,
      height: 50,
    };
    asciify('./src/assets/naruto_e_sasuke.png', options).then((asciified) => {
      console.log(asciified);
      console.log(`🚀 Server ready at ${url}`);
    });
  } catch (e) {
    console.log(e);
  }
});
