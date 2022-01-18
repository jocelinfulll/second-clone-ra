require('dotenv').config();

const env = process.env.NODE_ENV || 'development'

const baseConfig = {
    env,
    isDev: env === 'development',
    isTest: env === 'testing',
    port: 4000,
    secrets: {},
    db_vars:{
      "username":process.env.POSTGRES_DB_USERNAME,
      "password":process.env.POSTGRES_DB_PASSWORD,
      "host":process.env.POSTGRES_DB_HOST,
      "name":process.env.POSTGRES_DB_NAME
    },
    pivotFilePath:process.env.APP_PIVOT_FILE_PATH,
    awsS3BucketName: process.env.AWS_S3_BUCKET_NAME,
    getObjectExpiryTime: process.env.APP_GET_S3_OBJECT_EXPIRY_TIME,
    ibizaDomainKeyQueryParam: process.env.IBIZA_DOMAIN_KEY_QUERY_PARAM
  }

export default baseConfig