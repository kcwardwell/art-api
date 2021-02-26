import AWS from'aws-sdk';
const db = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.artDataTable;

 export const putItem = (item) => {
  console.log("db", db);
  console.log("TABLE_NAME", TABLE_NAME);
  const params = {
    TableName: TABLE_NAME,
    Item: item
  };
  console.log("params", params);
  db.put(params).promise();
};

