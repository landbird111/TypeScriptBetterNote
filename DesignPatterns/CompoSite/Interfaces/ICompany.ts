export interface ICompany<T> {
    Add(company: T): void;
    Remove(company: T): void;
    Display(depth: number): string;
    CompanyDuty(): string;
}