我把手上C#版本的設計模式的模型，這邊將版本換成 TypeScript

目前已實作的模式有：

-   adapter Pattern: 介面轉接器模式
    -   將一個類別的介面轉換成客戶希望的另一個介面。
    -   Adapter 模式使得原本由於介面不相容而不能一起工作的那些類別可以一起工作
-   Bridge Pattern: 橋接模式
    -   將抽象部分與它的實作部分分離，使它們都可以獨立的變化
-   Builder Pattern: 建造者模式
    -   將一個複雜物件的構建與它的表示分離，使得同樣的構建過程可以建立不同的表示
-   Command Pattern: 命令模式
    -   一種用一種中介的 Class 來做雙方的需求及狀態管理的模式
-   Composite Pattern: 組合模式
    -   將物件組合成樹形結構以表示部分-整體的層次結構，使得用戶對單個物件和組合物件的使用具有一致性
-   Decorator Pattern: 裝飾模式
    -   動態地給一個物件加入一些額外的職責，就新增功能來說，裝飾模式比產生子類別更為靈活。
-   Facade Pattern: 外觀模式
    -   可以用在將複雜的邏輯包裝成一個簡單的 API，例如：將多個 API 的結果合併成一個 API
-   Factory Method Pattern: 工廠方法模式
    -   定義一個用於建立物件的介面，讓子類別決定實體化哪一個類別。
    -   工廠方法使一個類別的實例化延遲到其子類別
-   Flyweight Pattern: 享元模式
    -   可以用在將多個物件的共用的資料集中在一個物件，例如：將多個物件的共用的資料集中在一個物件
-   Interpreter Pattern: 解譯器模式
    -   給定一個語言，定義它的文法的一種表示，並定義一個解譯器，這個解譯器使用該表示來解釋語言中的句子
-   Iterator Pattern: 迭代器模式
    -   提供一種方法順序訪問一個聚合物件中各個元素，而又不暴露該物件的內部表示
-   Mediator Pattern: 中介者模式
    -   可以用在將多個物件的溝通邏輯集中在一個物件，例如：將多個物件的溝通邏輯集中在一個物件
-   Memento Pattern: 備忘錄模式
    -   在不破壞封裝的前提下，捕獲一個物件的內部狀態，並在物件之外保存這個狀態。
    -   這樣以後就可以將該物件恢復到原先保存的狀態
-   Observer Pattern: 觀察者模式
    -   定義了一種一對多的依賴關係，讓多個觀察者對象同時監聽某一個主題對象
    -   這個主題物件在狀態發生變化時，會通知所有觀察者物件，使它們能夠自動更新自己。
-   Prototype Pattern: 原型模式
    -   用原型實例指定創建物件的種類，並且通過拷貝這些原型創建新的物件
-   Proxy Pattern: 代理模式
    -   可以用在打第三方 API 的管理上，例如：限制每分鐘只能打幾次 API，或是對 API 做快取，或是錯誤處理
-   Chain of Responsibility Pattern: 責任鏈模式
    -   為解除請求的發送者和接收者之間的耦合，而使多個物件都有機會處理這個請求
-   Singleton Pattern: 單例模式
    -   保證一個類別僅有一個實例，並提供一個存取它的全域點
-   State Pattern: 狀態模式
    -   當一個物件的內在狀態改變時允許改變其行為，這個物件看起來像是改變了其類別
    -   外部是不知道內部的狀態改變了，只知道物件的行為改變了(重點)
-   Strategy Pattern: 策略模式
    -   定義一系列的演算法，把它們一個個封裝起來，並且使它們可以互相替換
-   Template Method Pattern: 模板方法模式
    -   定義一個操作中的演算法的骨架，而將一些步驟延遲到子類別中。
    -   模板方法使得子類別可以不改變一個演算法的結構即可重定義該演算法的某些特定步驟
-   Visitor Pattern: 訪問者模式
    -   表示一個作用於某物件結構中的各元素之操作，它使你可以在不改變各元素之類別的前提下，定義作用於這些元素的新操作。
