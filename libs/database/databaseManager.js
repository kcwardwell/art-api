import AWS from'aws-sdk';
const db = () => new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.itemsDataTable;
export const putItem = async (item) => {
  console.log("db", db);
  console.log("TABLE_NAME", TABLE_NAME);
  const params = {
    TableName: TABLE_NAME,
    Item: item
  };
  console.log("params", params);
  return await db.put(params);
};