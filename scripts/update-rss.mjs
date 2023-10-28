import { writeFileSync } from 'fs';

import pkg from 'html-to-text';
const { htmlToText } = pkg;

import Parser from 'rss-parser';
const parser = new Parser();

const rssFeed = {
    Zenn: {
        rss_url: 'https://zenn.dev/suzuaws/feed',
        profile_url: 'https://zenn.dev/suzuaws'
    }
}

try {
    const jsonFeed = {}

    const spliceContent = (content) => `${htmlToText(content).slice(0, 73)}...`
    for (const [site, info] of Object.entries(rssFeed)) {
        const feed = await parser.parseURL(info.rss_url);
        const items = feed.items.map((i) => {
            console.log(i);
            return {
                title: i.title,
                content: spliceContent(i.content),
                url: i.link,
                date: i.pubDate
            }
        })
        const { rss_url, profile_url } = info
        jsonFeed[site] = { rss_url, profile_url, items };

        /*
        最終的な JSON ファイルの出力先は data フォルダとなり、RSS フィード毎に出力する
        例: ./data/Qiita.json, ./data/Zenn.json, etc.
        */
        writeFileSync(`./data/${site}.json`, JSON.stringify(jsonFeed[site]));
    }
} catch(err) {
    console.error(err);
}
