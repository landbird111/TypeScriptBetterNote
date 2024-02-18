import { WebSiteCenter } from "./WebSiteCenter";
import { CreateWebSite } from "./CreateWebSite";

export class WebSiteFactory {
    private _webSiteMap: Map<string, WebSiteCenter> = new Map<string, WebSiteCenter>();

    public GetWebSiteCategory(webSiteName: string): WebSiteCenter {
        if (!this._webSiteMap.has(webSiteName)) {
            this._webSiteMap.set(webSiteName, new CreateWebSite(webSiteName));
        }

        return this._webSiteMap.get(webSiteName) as WebSiteCenter;
    }

    public GetWebSiteCount(): number {
        return this._webSiteMap.size;
    }
}
