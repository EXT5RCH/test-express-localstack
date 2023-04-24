# test-express-localstack

Express + LocalStack による API テスト

# 手順

## STEP 1. パッケージのインストール

```sh
cd api-server
npm ci
cd ..
```

## STEP 2. 各 docker の起動

```sh
docker compose up -d
```

## STEP 3. テスト実行

```sh
docker compose exec api-server npm run test
```

## STEP 4. お片付け

```sh
docker compose down
```
