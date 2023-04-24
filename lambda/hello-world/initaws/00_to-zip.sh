#!/usr/bin/env bash

## set env
export LAMBDA_SOURCE_DIR=/workspace/lambda/$LAMBDA_FUNCTION_NAME/src
export LAMBDA_ZIP_DIR=/workspace/lambda/$LAMBDA_FUNCTION_NAME/zip

echo $LAMBDA_SOURCE_DIR
echo $LAMBDA_ZIP_DIR

## build
mkdir $LAMBDA_ZIP_DIR
cd $LAMBDA_SOURCE_DIR
zip -r $LAMBDA_ZIP_DIR/$LAMBDA_FUNCTION_NAME.zip *
