// To get specific movie data by release year
const getMovies = function (req, res) {
    
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "movies-data",
    KeyConditionExpression: "releaseYear = :year",
    ExpressionAttributeValues: {
        ":year": "2020"
    }
};

await docClient.query(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Query succeeded:", JSON.stringify(data, null, 2));
    }

});
    
};
