import AWS from 'aws-sdk';
const db = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.artDataTable;

export const getItem = ( key ) => {
  const params = {
    Key:{
      itemId: key.itemId,
      typeId: key.typeId
    },
    TableName: TABLE_NAME
  };
  console.log("params getItem",params);
  return db.get(params).promise().then(result => {
    return result.Item;
  });
};


