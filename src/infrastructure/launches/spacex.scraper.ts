import VideoScraper from "../../core/launches/ports/video.scraper";
import fetch from 'node-fetch';
import { parse } from 'node-html-parser'

export default class SpaceXVideoScraper implements VideoScraper {
    public async getVideoUrl(pageUrl: string): Promise<string> {
        const pageContent = await fetch(pageUrl).then((response) => response.text());
        const rootElement = parse(pageContent);
        return pageContent;
    }
}