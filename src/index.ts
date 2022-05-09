import AstralBot from "./application/main";
import LaunchRepositoryImpl from "./infrastructure/launches/launch.repository";
import LaunchServiceImpl from "./core/launches/services/launch.service";
import RocketLaunchAPI from "./infrastructure/launches/rocketlaunch.api";

const launchService = new LaunchServiceImpl(new LaunchRepositoryImpl(), new RocketLaunchAPI());
const discordBot = new AstralBot(launchService);

discordBot.start();