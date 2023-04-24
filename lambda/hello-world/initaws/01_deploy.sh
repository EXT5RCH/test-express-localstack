#!/usr/bin/env bash

## set env
export LAMBDA_ZIP_DIR=/workspace/lambda/$LAMBDA_FUNCTION_NAME/zip

## delete lambda
awslocal lambda delete-function \
  --function-name $LAMBDA_FUNCTION_NAME \
  --region $LAMBDA_FUNCTION_REGION \
  --endpoint-url=http://localhost:4566 

## deploy
awslocal lambda create-function \
  --function-name $LAMBDA_FUNCTION_NAME \
  --runtime nodejs18.x \
  --zip-file fileb://$LAMBDA_ZIP_DIR/$LAMBDA_FUNCTION_NAME.zip \
  --region $LAMBDA_FUNCTION_REGION \
  --role arn:aws:iam::123456789012:role/lambda-execute \
  --handler index.handler \
  --endpoint-url=http://localhost:4566

## delete zip
rm -rf $LAMBDA_ZIP_DIR
