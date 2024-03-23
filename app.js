const contacts = require("./contacts");
const yargs = require("yargs");

yargs.command({
    command: "add",
    describe: "tambahin contact baru",
    builder: {
        nama: {
            demandOption: true,
            describe: "nama lengkap mu",
            type: "string",
        },
        umur: {
            demandOption: true,
            describe: "umur mu",
            type: "int",
        },
        email: {
            demandOption: true,
            describe: "alamat email mu",
            type: "string",
        },
        no: {
            demandOption: true,
            describe: "nomor Hp mu",
            type: "string",
        }
    },handler(argv){
        let data = {
            nama : argv.nama,
            umur : argv.umur,
            email : argv.email,
            no : argv.no
        }
        contacts.simpanContact(data);
    }
})

yargs.command({
    command: "list",
    describe: "tampilkan semua contact yang tersimpan",
    handler(){
        contacts.tampilList();
    }
});

yargs.command({
    command : "delete",
    describe : "menghapus sebuah kontak berdasarkan namanya",
    builder : {
        nama: {
            demandOption: true,
            describe: "nama contact yang ingin di hapus",
            type: "string",
        }
    },
    handler(argv){
        contacts.deleteList(argv.nama);
    }
});

yargs.parse();



// const main = async() =>{
//     let name = await contacts.pertanyaan("siapa kamu?");
//     let umur = await contacts.pertanyaan("umur berapa?");
//     let email = await contacts.pertanyaan("email kamu?");
//     let no = await contacts.pertanyaan("nomor hp?");

//     contacts.simpanContact(name, umur, email, no);
// }

// main();
