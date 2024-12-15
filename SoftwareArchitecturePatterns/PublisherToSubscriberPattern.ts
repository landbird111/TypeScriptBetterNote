/**
 * =================================
 * Publisher-Subscriber Pattern (發佈者-訂閱者模式)
 * =================================
 */

// 概述：
// 發佈者-訂閱者（Pub-Sub）模式是一種訊息傳遞模式，允許解耦服務進行非同步通訊。

// 何時使用：
// 1. 需要非同步通訊和服務間鬆散耦合的應用。
// 2. 多個服務需要回應相同事件的場景，例如使用者通知或稽核日誌。

// EventBroker class
public class EventBroker {
    private listeners: Array<(sender: any, message: string) => void> = [];

    public onEventPublished(callback: (sender: any, message: string) => void): void {
        this.listeners.push(callback);
    }

    public publish(message: string): void {
        this.listeners.forEach(callback => callback(this, message));
    }
}

// Subscriber class
public class Subscriber {
    public onEventReceived(sender: any, message: string): void {
        console.log(`Received message: ${message}`);
        // Process the message
    }
}

// Usage
const broker = new EventBroker();
const subscriber = new Subscriber();

broker.onEventPublished((sender, message) => subscriber.onEventReceived(sender, message));

broker.publish("Policy Updated");

// ================================================================
// 延伸版本(For C#):

// public class EventBroker
// {
//     public event EventHandler<string> OnEventPublished;
// 
//     public void Publish(string message)
//     {
//         OnEventPublished?.Invoke(this, message);
//     }
// }
//
// public class Subscriber
// {
//     public void OnEventReceived(object sender, string message)
//     {
//         Console.WriteLine($"Received message: {message}");
//     }
// }
//
// var broker = new EventBroker();
// var subscriber = new Subscriber();
// broker.OnEventPublished += subscriber.OnEventReceived;
// 
// broker.Publish("Policy Updated");