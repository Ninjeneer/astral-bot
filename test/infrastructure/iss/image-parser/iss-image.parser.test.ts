import ISSImageParser from "../../../../src/core/iss/ports/iss-image-parser.port";
import ImageAstroviewerParser from "../../../../src/infrastructure/iss/image-astroviewer.parser";

describe("ISS Image Parser", () => {
    let issImageParser: ISSImageParser;

    beforeEach(() => {
        issImageParser = new ImageAstroviewerParser();
    });

    it("should be defined", () => {
        expect(issImageParser).toBeDefined();
    });

    it("should get the ISS image position", async () => {
        const image = await issImageParser.getMapImage();
        console.log(image);
    }, 10000);
});