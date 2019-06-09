#!/usr/bin/env bash
docker build -t agnasci-mock-server . && docker run -P --name agnasci-mock-server -d -p 8888:1080 agnasci-mock-server
