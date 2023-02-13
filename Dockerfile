ARG IMAGE_VERSION=latest
FROM mongo:$IMAGE_VERSION
COPY entrypoint.sh /entrypoint.sh
EXPOSE 27017:27017
ENTRYPOINT ["/entrypoint.sh"]