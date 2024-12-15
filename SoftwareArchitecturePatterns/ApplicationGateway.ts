/**
 * ==============================
 * Application Gateway (應用程式閘道)
 * ==============================
 */

// 概述：
// 應用閘道通常用於在微服務架構中將流量路由到多個後端服務。
// 與在網路層工作的負載平衡器不同，應用閘道可以檢查 HTTP 請求，並根據 URL 路徑或標頭對其進行路由。
// 有一點像Router或是工廠模式，但是應用閘道是一個更高級的抽象，它可以將請求路由到不同的服務，而不僅僅是不同的端點。

// 何時使用：
// 1. 根據 URL 路徑或標頭將請求路由到多個後端服務時。
// 2. 非常適合需要集中路由和安全的多服務或微服務應用。

// 負載平衡器和應用閘道有什麼差別？ 
// => 負載平衡器通常在第 4 層（傳輸層）運行，根據 IP 和連接埠資訊在多個伺服器之間分配傳入的網路流量。
// 另一方面，應用閘道在第 7 層（應用層）運行，可以根據 URL 路徑、主機名稱和標頭路由流量。
// 在需要將特定端點路由到不同後端服務的微服務架構中，這一點尤其有用。

class ApplicationGateway {
    public routeRequest(path: string): void {
        // ES6之前的寫法
        // if (path.indexOf("/accounts") === 0) {
        // ES6之後的寫法
        if (path.startsWith("/accounts")) {
            console.log("Routing to Accounts Service");
            // Route to Accounts Service
        } else if (path.startsWith("/payments")) {
            console.log("Routing to Payments Service");
            // Route to Payments Service
        } else {
            console.log("Routing to Default Service");
            // Route to Default Service
        }
    }
}

// Usage
const gateway = new ApplicationGateway();
gateway.routeRequest("/payments/process");

// ================================================================
// 延伸版本(For C#):
// public class ApplicationGateway
// {
//     public void RouteRequest(HttpContext context)
//     {
//         if (context.Request.Path.StartsWithSegments("/accounts"))
//         {
//             context.Response.Redirect("https://accounts.example.com");
//         }
//         else if (context.Request.Path.StartsWithSegments("/payments"))
//         {
//             context.Response.Redirect("https://payments.example.com");
//         }
//         else
//         {
//             context.Response.Redirect("https://default.example.com");
//         }
//     }
// }