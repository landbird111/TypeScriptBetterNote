/**
 * ====================================
 * Sidecar Pattern (Sidecar 模式)
 * ====================================
 */

// 概述：
// Sidecar 模式涉及部署一個單獨的配套服務，與主應用程式同時運作。
// 當您想要在不修改核心應用程式的情況下新增日誌、監控或安全性等橫向功能時，這種模式非常有用。

// 何時使用:
// 1. 需要額外功能（如日誌記錄或監控）而無需修改核心邏輯的應用程式。
// 2. 當需要在多個應用程式或服務中進行標準化的跨領域關注時。
// 3. 當您想要將橫向功能與核心應用程式分開時。
// 4. 像是可以預處理請求或回應，以及將其記錄到日誌中，而不用再調整主應用程式原本的作業流程。

public class SidecarLogger {

    public void LogRequest(string request) {
        // Log request
        console.log("Request: " + request);
    }

    public void LogResponse(string response) {
        // Log response
        console.log("Response: " + response);
    }
}

public class PaymentService {
    
        private readonly SidecarLogger _logger;
    
        public PaymentService(SidecarLogger logger) {
            this._logger = logger;
        }
    
        public void ProcessPayment(string request, string response) {
            this._logger.LogRequest(request);

            // Payment processing logic
            this._logger.LogResponse(response);
        }
    }