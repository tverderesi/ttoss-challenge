import { seedVideos } from "./seedVideos";
import { seedAdmin } from "./seedAdmin";

seedAdmin().catch(console.error);
seedVideos().catch(console.error);
