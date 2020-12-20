#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:taixingyiji/blog.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://taixingyiji:${GITHUB_TOKEN}@github.com/taixingyiji/blog.git
  git config --global user.name "taixingyiji"
  git config --global user.email "taixingyiji@126.com"
fi
git init
git add google.xml
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# 谷歌鏈接推送
#ping http://www.google.com/ping?sitemap=http://taixingyiji.com/google.xml

rm -rf google.xml # 删除文件
