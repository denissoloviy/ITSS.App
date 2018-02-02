export class CommonUsersModel {
    public etWebUser: FullEmployee;
    public adUser: FullEmployee;
    public maconomyUser: FullEmployee;
}

export class Employee {
    constructor() {
        this.LoginId = null;
        this.FirstName = null;
        this.LastName = null;
        this.MaconomyEmployeeNumber = null;
        this.EtWebCompanyId = null;
        this.EtWebDepartmentId = null;
        this.EtWebTeamId = null;
        this.SupervisorMaconomyID = null;
        this.EmailJob = null;
        this.JobTitle = null;
        this.Name = null;
    }
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
    constructor() {
        super();
        this.PositionStatus = null;
        this.MobilePhoneNumber = null;
        this.HireDate = null;
        this.BirthDate = null;
        this.CompanyName = null;
        this.DepartmentName = null;
        this.TeamName = null;
        this.ManagerLoginId = null;
        this.StreetAddress = null;
        this.City = null;
        this.ZipCode = null;
        this.EmailPrivate = null;
        this.GenderCode = null;
        this.SalaryAmount = null;
        this.VCBase = null;
        this.EmployeeType = null;
        this.EmployeeCategoryNumber = null;
        this.PersonalIdentityNumber = null;
        this.BankAccountNumber = null;
        this.HourlyCostRate = null;
    }
    public PositionStatus: string;
    public MobilePhoneNumber: string;
    public HireDate: string;
    public BirthDate: string;
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