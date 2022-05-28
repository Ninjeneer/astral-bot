import APODServiceImpl from "./core/apod/services/apod.service";
import AstralBot from "./application/main";
import ISSTrackerServiceImpl from "./core/iss/services/iss-tracker.service";
import LaunchRepositoryImpl from "./infrastructure/launches/launch.repository";
import LaunchServiceImpl from "./core/launches/services/launch.service";
import NasaAPODAPI from "./infrastructure/apod/nasa.api";
import NotificationRepositoryImpl from "./infrastructure/notifications/notification.repository";
import RocketLaunchAPI from "./infrastructure/launches/rocketlaunch.api";
import WhereIsTheISSAPI from "./infrastructure/iss/whereistheiss.api";

const apodService = new APODServiceImpl(new NasaAPODAPI());
const launchService = new LaunchServiceImpl(new LaunchRepositoryImpl(), new RocketLaunchAPI(), new NotificationRepositoryImpl());
const issTrackerService = new ISSTrackerServiceImpl(new WhereIsTheISSAPI());

const discordBot = new AstralBot(launchService, apodService, issTrackerService);

discordBot.start();