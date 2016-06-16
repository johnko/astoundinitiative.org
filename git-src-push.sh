#!/bin/sh

git push git@github.com:johnko/astoundinitiative.org.git org:refs/heads/hexo
hexo generate
hexo deploy

