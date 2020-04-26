const app = require('./app');

app.listen({ port: process.env.port || 4000 }).then(({ url }) => {
  console.log('\n\n\n ');
  console.log('██████  ██  ██████      ██████  ███████ ██      ██  ██████  ');
  console.log('██   ██ ██ ██           ██   ██ ██      ██      ██ ██    ██ ');
  console.log('██████  ██ ██   ███     ██████  █████   ██      ██ ██    ██ ');
  console.log('██   ██ ██ ██    ██     ██   ██ ██      ██ ██   ██ ██    ██ ');
  console.log('██████  ██  ██████      ██████  ███████ ██  █████   ██████  █ █ █');
  console.log('                                                            ');
  console.log('\n\n\n ');
  console.log(`🚀 Server ready at ${url}`);
});
