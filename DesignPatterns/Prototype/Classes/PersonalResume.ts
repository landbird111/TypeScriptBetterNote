import { WorkExperience } from "./WorkExperience";

export class PersonalResume {
    private name: string = "";
    private sex: string = "";
    private age: number = 0;

    private work: WorkExperience;

    constructor(name: string) {
        this.name = name;
        this.work = new WorkExperience();
    }

    cloneWorkExperience(): void {
        this.work = this.work.clone();
    }

    setPersonalInfo(sex: string, age: number): void {
        this.sex = sex;
        this.age = age;
    }

    setWorkExperience(workDate: string, companyName: string): void {
        this.work.WorkDate = workDate;
        this.work.CompanyName = companyName;
    }

    display(): void {
        console.log(`name: ${this.name}, sex: ${this.sex}, age: ${this.age}`);
        console.log(`work experience: ${this.work.WorkDate}, ${this.work.CompanyName}`);
    }

    clone(): PersonalResume {
        let clone = Object.create(this);
        clone.cloneWorkExperience();

        clone.name = this.name;
        clone.sex = this.sex;
        clone.age = this.age;
        
        return clone;
    }
}
