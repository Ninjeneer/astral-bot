import AstralBot from "./application/main";
import LaunchServiceImpl from "./core/launches/services/launch.service";

const launchService = new LaunchServiceImpl(null);
const discordBot = new AstralBot(launchService);

discordBot.start();