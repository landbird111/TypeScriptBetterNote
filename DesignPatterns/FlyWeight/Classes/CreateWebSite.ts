import { IUserSample } from "../Interfaces/IUserSample";
import { WebSiteCenter } from "./WebSiteCenter";

export class CreateWebSite extends WebSiteCenter {
    private _webSiteName: string;

    constructor(webSiteName: string) {
        super();
        this._webSiteName = webSiteName;
    }

    Use(user: IUserSample): string {
        return `網站分類: ${this._webSiteName} 用戶: ${user.userName}`;
    }
}
