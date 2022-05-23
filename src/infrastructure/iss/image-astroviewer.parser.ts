import ISSImageParser from "../../core/iss/ports/iss-image-parser.port";
import Pageres from 'pageres';

export default class ImageAstroviewerParser implements ISSImageParser {
    public async getMapImage(): Promise<string> {
        const canvas = await new Pageres({ delay: 10, selector: '#isst' })
            .src('https://isstracker.spaceflight.esa.int/', ['1024x768'])
            .dest(__dirname)
            .run();
        return Buffer.from(canvas[0].buffer).toString('base64');
    }
}