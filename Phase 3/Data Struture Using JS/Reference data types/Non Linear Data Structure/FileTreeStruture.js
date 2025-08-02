class FileTree{
    constructor(name,type){
            this.name = name;               // name of file or folder 
            this.type = type;               // type of file or folder 
            this.children = [];                 // children 
    }

    addChild(child){
            if(this.type=="file"){
                console.log("Can't add any children inside this file "+this.name+" is a type of "+this.type+" it is not a folder")
                return;
            }
            this.children.push(child)
    }
    display(indent=0){
        console.log(" ".repeat(indent)+""+this.name+" as a Folder")
        for(let child of this.children){
            if(child.type=="folder"){
                child.display(indent+2);            // if it a folder, call display again 
            }else {
                console.log(" ".repeat(indent+2)+" "+child.name+" as a File")
            }
        }
    }
}


let root = new FileTree("C Drive","folder");
    let document = new FileTree("Documents","folder");
    let downloads = new FileTree("Downloads","folder");
    let ProgramFiles = new FileTree("Program Files","folder");
    let music = new FileTree("Music","folder");

let resume = new FileTree("AkashKale.doc","file");
let photo = new FileTree("flower.jpg","file");
let nodejs = new FileTree("node.exe","file");
let song = new FileTree("newmovies.mg3","file");
let textfile = new FileTree("NewFile1","file");
let pdfFile = new FileTree("Sample.pdf","file");

root.addChild(document);
root.addChild(downloads);
root.addChild(ProgramFiles);
root.addChild(music);


document.addChild(textfile)
document.addChild(resume);
downloads.addChild(photo);
music.addChild(song)
ProgramFiles.addChild(nodejs)

textfile.addChild(pdfFile)
console.log("-----------------------")
root.display();