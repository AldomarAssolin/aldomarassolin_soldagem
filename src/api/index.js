var axios = require('axios');
var data = JSON.stringify({
    "collection": "companies",
    "database": "portifolio-soldagem",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-ikxbb/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'YOHQnEVCsDQQ5ZHjT4xfaWyTPDSlwqKCT5OWUdn0he64tvICe1Rpd51zXoSjeiQ1',
      'Accept': 'application/ejson'
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
