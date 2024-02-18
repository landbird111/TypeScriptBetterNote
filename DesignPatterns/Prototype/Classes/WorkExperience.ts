export class WorkExperience {
    WorkDate: string = "";
    CompanyName: string = "";

    public clone(): WorkExperience {
        let clone = Object.create(this);
        return clone;
    }
}
