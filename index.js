'use strict'
const alfy = require('alfy')
const jenkins = require('jenkins')({ baseUrl: `${process.env.url}`, crumbIssuer: true })
jenkins.job.list(function (err, data) {
  const items = alfy
    .inputMatches(data, 'name')
    .map(x => ({
      title: x.name,
	  subTitle: x.url,
	  arg: x.name
    }))
  alfy.output(items)
})
