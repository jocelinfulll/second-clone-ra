#!/bin/bash
aws s3api list-buckets \
    --profile=local \
    --endpoint-url=http://localhost:4566 \
    --query "Buckets[].Name"

aws s3 rm s3://recovery-assistant/ \
    --profile=local \
    --endpoint-url=http://localhost:4566 \
    --recursive

aws s3 rb s3://recovery-assistant \
    --profile=local \
    --endpoint-url=http://localhost:4566 \
    --force

aws s3api list-buckets \
    --profile=local \
    --endpoint-url=http://localhost:4566 \
    --query "Buckets[].Name"

aws s3 mb s3://recovery-assistant \
    --profile=local \
    --endpoint-url=http://localhost:4566 \

aws s3api put-bucket-acl \
    --profile=local \
    --endpoint-url=http://localhost:4566 \
    --bucket recovery-assistant \
    --acl public-read

aws s3api put-bucket-notification-configuration \
    --profile=local \
    --endpoint-url=http://localhost:4566 \
    --bucket recovery-assistant \
    --notification-configuration file://./lambdas/save-pivot-files/save-pivot-files-notification.json