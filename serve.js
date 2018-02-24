const http = require('http');
const port =  process.env.PORT || 8080;
const host = '0.0.0.0';
const helloyHandler = (req, res) => {
	const mess = `Hello port ${port}! at ${Date.now()} is ${process.env.NODE_ENV} instanceID ${process.env.NODE_APP_INSTANCE}`;
	console.log('is log '+ mess);
	res.write(mess);
	res.end();
};

const server = http.createServer(helloyHandler)
	.listen(port,host, () => console.log(`Run serve listen ${port} post`))
	.on('error', err => console.error('Error run  serve ', err));


