import { TestPaperBase } from "./TestPaperBase";

/** 試卷A作答 */
export class TestPaperA extends TestPaperBase {
    protected answer1(): string {
        return "b";
    }

    protected answer2(): string {
        return "c";
    }

    protected answer3(): string {
        return "a";
    }
}