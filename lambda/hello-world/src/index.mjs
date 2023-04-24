export const handler = async (_event, _context) => {
  try {
    const response = {
      // API Gateway側で使うステータスコード。
      // レスポンス自体のステータスコードは200で返却される。
      statusCode: 201,
      body: JSON.stringify({
        message: "hello world",
      }),
    };
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
