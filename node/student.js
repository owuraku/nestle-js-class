class Staff {
    staffName;
    staffId;
    employmentYears;
    salary;

    // defines how an object of this class will be created
    // constructor(sn, sid, ey){
    constructor(staffName, staffId, employmentYears){
        this.staffName = staffName;
        this.staffId = staffId;
        this.employmentYears = employmentYears;
        this.salary = 1000 * (!employmentYears ? 1 : employmentYears);
        //  this.staffName = sn;
        // this.staffId = sid;
        // this.employmentYears = ey;
    }

    displayInfo(){
        console.log(`Staffname: ${this.staffName} 
        StaffId: ${this.staffId} 
        Number of years: ${this.employmentYears}
        Salary: ${this.salary}
        `);
    }

}

module.exports = Staff;