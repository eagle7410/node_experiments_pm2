const http = require('http');
const port =  process.env.PORT || 8000;
const helloyHandler = (req, res) => {
	const mess = `Hello port ${port}! at ${Date.now()} is ${process.env.NODE_ENV} instanceID ${process.env.NODE_APP_INSTANCE}`;
	console.info('is info '+ mess);
	console.warn('is warn '+ mess);
	console.error('is error '+ mess);
	console.log('is log '+ mess);
	res.write(mess);
	res.end();
};

const server = http.createServer(helloyHandler)
	.listen(port, () => console.log(`Run serve listen ${port} post`))
	.on('error', err => console.error('Error run  serve ', err));


