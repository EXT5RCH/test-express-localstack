import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";

export default function useLambda() {
  const invoke = async (funcName: string) => {
    const client = new LambdaClient({
      endpoint: "http://localstack:4566",
      region: "ap-northeast-1",
      credentials: {
        accessKeyId: "test", // ダミーでOK
        secretAccessKey: "test", // ダミーでOK
      },
    });
    const command = new InvokeCommand({
      FunctionName: funcName,
      InvocationType: "RequestResponse",
      Payload: Buffer.from(JSON.stringify({})),
    });
    const response = await client.send(command);
    const result = Buffer.from(response.Payload!).toString();
    return result;
  };

  return { invoke };
}
