const studentName = 'Kevin Isom'


const studentAttendance = (names) => {

    let Num1 = 2
    let Num2 = 3
    console.log(add(Num1, Num2))
    console.log(multiply(Num1, Num2))
}

function add(num1, num2){
    answer = num1 + num2;
    return `The result of ${num1} + ${num2} is ${answer}`;
}

function multiply(num1, num2) {
    answer =  num1 * num2;
    return `The result of ${num1} * ${num2} is ${answer}`;
}
    


let companyNames = {
    company1: "Sasini PLC",
    company2: "EPK Limited",
    company3: "Alphabet Inc",
    company4: "RedLinux Corporation",
    services:
        {
        service1: 'airtime',
        service2: 'loans',
        service3: 'gas'
        }   
}

let {company1, company2} = companyNames
console.log(`Company1: ${company1}`)

let { service1, ...service2} = companyNames.services
console.log(`Service1: ${service2}`);

// studentAttendance(studentName)