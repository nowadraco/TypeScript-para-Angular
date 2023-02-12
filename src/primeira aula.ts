type heroi = {
    name: string;
    vulgo: string;
};

function printraObjetos(pessoa: heroi) {
    console.log(pessoa);
};

printraObjetos({
    name: "bruce",
    vulgo: "batman"
});