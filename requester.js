const request = require('request');

for (let i = 0; i < 100; ++i)
{
	request('http://localhost:8002/');
}
