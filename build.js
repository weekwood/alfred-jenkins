const alfy = require('alfy')
const jenkins = require('jenkins')({ baseUrl: `${process.env.url}`, crumbIssuer: true })
jenkins.job.build(process.argv[2], function (err, data) {
	alfy.log('build job', data);
})
