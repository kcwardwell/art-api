import AWS from 'aws-sdk';

const db = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.artDataTable;
export const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function was executed successfully!',
      input: event
    })
  };
};

export const saveItem = (event) => {
  const item = JSON.parse(event.body);
  console.log("saveItem handler item", item);
  putItem(item);
};

const putItem = (item) => {
  console.log("db", db);
  console.log("TABLE_NAME", TABLE_NAME);
  const params = {
    TableName: TABLE_NAME,
    Item: item
  };
  console.log("params", params);
  db.put(params).promise();
};