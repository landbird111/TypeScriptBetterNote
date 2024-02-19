import { TestPaperBase } from "../BaseClasses/TestPaperBase";

/** 試卷B作答 */
export class TestPaperB extends TestPaperBase {
    protected answer1(): string {
        return "a";
    }

    protected answer2(): string {
        return "c";
    }

    protected answer3(): string {
        return "a";
    }
}