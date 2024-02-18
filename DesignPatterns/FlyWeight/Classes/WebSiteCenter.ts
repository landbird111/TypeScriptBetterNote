import { UserSample } from "./UserSample";

/**
 * 建立一個網站中心的抽象類別
 */
export abstract class WebSiteCenter {
    abstract Use(user: UserSample): string;
}
