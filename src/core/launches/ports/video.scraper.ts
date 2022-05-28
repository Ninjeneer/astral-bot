export default interface VideoScraper {
    getVideoUrl(pageUrl: string): Promise<string>;
}