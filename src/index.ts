import APODServiceImpl from "./core/apod/service/apod.service";
import AstralBot from "./application/main";
import LaunchRepositoryImpl from "./infrastructure/launches/launch.repository";
import LaunchServiceImpl from "./core/launches/services/launch.service";
import NasaAPODAPI from "./infrastructure/apod/nasa.api";
import NotificationRepositoryImpl from "./infrastructure/notifications/notification.repository";
import RocketLaunchAPI from "./infrastructure/launches/rocketlaunch.api";

const apodService = new APODServiceImpl(new NasaAPODAPI());
const launchService = new LaunchServiceImpl(new LaunchRepositoryImpl(), new RocketLaunchAPI(), new NotificationRepositoryImpl());
const discordBot = new AstralBot(launchService, apodService);

discordBot.start();