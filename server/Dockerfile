FROM debian:trixie-slim

RUN apt-get update && apt-get install -y libc6

COPY build/server /usr/local/bin/server

RUN chmod +x /usr/local/bin/server

CMD ["/usr/local/bin/server"]
