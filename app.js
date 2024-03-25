const contacts = require("./contacts");
const yargs = require("yargs");

yargs.command({
    command: "add",
    describe: "tambahin contact baru",
    handler(){
        (async function(){
            let nama = await contacts.pertanyaan("siapa nama mu?");
            let umur = await contacts.pertanyaan("kamu berapa tahun?");
            let email = await contacts.pertanyaan("email kamu apa?");
            let no = await contacts.pertanyaan("nomor hp kamu apa?");
            data = {nama, umur, email, no}

            contacts.simpanContact(data);
        })();
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
