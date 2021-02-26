
import {createResponse} from './libs/library/libraryManager';
import {putItem, getItem} from './libs/databaseManager';
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

export const findItem = (event, context, callback) => {
  //const itemId = event.pathParameters.itemId;
  const key = JSON.parse(event.body);
  console.log("key" , key);

  return getItem(key).then(response => {
    console.log("response",response);
    callback(null, createResponse(200, response));
  }).catch( e => {
    console.log("error",e.message);
    return e.message;
  });
};
// const putItem = (item) => {
//   console.log("db", db);
//   console.log("TABLE_NAME", TABLE_NAME);
//   const params = {
//     TableName: TABLE_NAME,
//     Item: item
//   };
//   console.log("params", params);
//   db.put(params).promise();
// };