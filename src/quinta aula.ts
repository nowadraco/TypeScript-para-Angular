//funções

function addnumber(x: number, y: number): number {
    return x + y;
};

function aadToHello(name: string){
    return `hello ${name}`
};

function callToPhone(phone: number | string): number | string {
    return phone;
}

console.log(aadToHello("luiz"));

let soma: number = addnumber(4, 7);

console.log(soma);

console.log(callToPhone(119999999))


async function getDatabase
(id: number): Promise<string> {
    return "luiz";
};
