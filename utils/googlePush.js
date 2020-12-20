/**
 * 生成百度链接推送文件
 */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')
const matter = require('gray-matter'); // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter
const readFileList = require('./modules/readFileList');
const urlsRoot = path.join(__dirname, '..', 'google.xml'); // 百度链接推送文件
const DOMAIN = process.argv.splice(2)[0]; // 获取命令行传入的参数

if (!DOMAIN) {
    console.log(chalk.red('请在运行此文件时指定一个你要进行百度推送的域名参数，例：node utils/baiduPush.js https://xugaoyi.com'))
    return
}

main();

/**
 * 主体函数
 */
function main() {
    const begin = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    fs.writeFileSync(urlsRoot, begin)
    const files = readFileList(); // 读取所有md文件数据

    files.forEach( file => {
        const { data } = matter(fs.readFileSync(file.filePath, 'utf8'));
        const date = dateFormatter(new Date())

        if (data.permalink) {
            const url = '\n  <url>' +
                '\r\n    <loc>'+`${DOMAIN}${data.permalink}`+'</loc>' +
                '\r\n    <lastmod>'+date+'</lastmod>' +
                '\n  </url>'
            // const link = `\r\n${DOMAIN}${data.permalink}`;
            console.log(url)
            fs.appendFileSync(urlsRoot, url);
        }
    })
    fs.appendFileSync(urlsRoot, '\r\n</urlset>');
}

function dateFormatter (date) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const strDate = date.getDate().toString().padStart(2, '0');
    return `${date.getFullYear()}-${month}-${strDate}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}+08:00`;
}