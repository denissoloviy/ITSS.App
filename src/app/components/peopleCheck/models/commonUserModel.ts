export class CommonUserModel {
    public firstName: string;
}

export class Employee {
    public LoginId: string;
    public FirstName: string;
    public LastName: string;
    public MaconomyEmployeeNumber: string;
    public EtWebCompanyId: number;
    public EtWebDepartmentId: number;
    public EtWebTeamId: number;
    public SupervisorMaconomyID: string;
    public EmailJob: string;
    public JobTitle: string;
    public Name: string;
}

export class FullEmployee extends Employee {
    public PositionStatus: string;
    public MobilePhoneNumber: string;
    public HireDate: Date;
    public BirthDate: Date;
    public CompanyName: string;
    public DepartmentName: string;
    public TeamName: string;
    public ManagerLoginId: string;
    public StreetAddress: string;
    public City: string;
    public ZipCode: string;
    public EmailPrivate: string;
    public GenderCode: string;
    public SalaryAmount: string;
    public VCBase: string;
    public EmployeeType: string;
    public EmployeeCategoryNumber: string;
    public PersonalIdentityNumber: string;
    public BankAccountNumber: string;
    public HourlyCostRate: number;
}