let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read 

    this.info = function() {
        readText="not read yet"
        if(read){
            readText="have read"
        }
        console.log(title + ', ' + author + ', ' + pages + ' pages, '+ readText)
    }

}

function addBookToLibrary(Book){
    myLibrary.push(Book);
}
function remCard(cardID){
    let arr = cardID.match(/[0-9]+$/);
    let num = parseInt(arr[0], 10);
    myLibrary.splice(num,1);
    console.log("press");
}

function createCard(arrayLib){
    var container = document.getElementById("container");
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    for(var i=0; i <arrayLib.length; i++){
        //card
        var card = document.createElement("div");
        card.className = "card";
        card.id = "card"+ i;
        container.append(card);
        //title
        var bookTitle = document.createElement("div");
        bookTitle.className= "bookTitle";
        bookTitle.id = "bookTitle" + i;
        bookTitle.innerHTML = "<strong>Title: </strong>"+ arrayLib[i].title;
        card.append(bookTitle);
        //author
        var bookAuthor = document.createElement("div");
        bookAuthor.className= "bookAuthor";
        bookAuthor.id = "bookAuthor" + i;
        bookAuthor.innerHTML = "<strong>Author: </strong>"+arrayLib[i].author;
        card.append(bookAuthor);
        //pages
        var bookPages = document.createElement("div");
        bookPages.className= "bookPages";
        bookPages.id = "bookPages" + i;
        bookPages.innerHTML = "<strong>Number of Pages: </strong>" + arrayLib[i].pages;
        card.append(bookPages);


        //have read
        var footCon = document.createElement("div");
        footCon.className = "footCon";
        footCon.id = "footCon" + i;
        card.append(footCon);

        var readCon = document.createElement("div");
        readCon.className= "readCon";
        readCon.id = "readCon" + i;
        footCon.append(readCon);

        var readText = document.createElement("div");
        readText.className = "readText";
        readText.id = "readText" + i;
        readText.innerHTML= "Have you read?";
        readCon.append(readText)

        var switchCon = document.createElement("label");
        switchCon.className = "switchCon";
        switchCon.id = "switchCon"+ i;
        readCon.append(switchCon);

        var checkBox = document.createElement("input");
        checkBox.type="checkbox";
        checkBox.className="switch";
        checkBox.id ="switch" + i;
        if(arrayLib[i].read){
            checkBox.checked = true;
        }else{
            checkBox.checked = false;
        }
        switchCon.append(checkBox);

        var switchB = document.createElement("span");
        switchB.className="slider round";
        switchCon.append(switchB);

        var removeCon = document.createElement("div");
        removeCon.className= "removeCon";
        removeCon.id = "removeCon" + i;
        footCon.append(removeCon);

        var remBtn = document.createElement("button");
        remBtn.className = "remBtn";
        remBtn.id = "remBtn" + i;
        remBtn.innerHTML= "- Remove Book";
        removeCon.append(remBtn);
    }
    const remBtns = document.getElementsByClassName("remBtn");

    const remBtnPress = e => {
        let btnID = e.target.id;  // Get ID of Clicked Element
        let arr = btnID.match(/[0-9]+$/);
        let num = parseInt(arr[0], 10);
        myLibrary.splice(num,1);
        createCard(myLibrary);
    }
    for (let remBtn of remBtns){
        remBtn.addEventListener("click", remBtnPress);
    }

    //checkbox change
    const changeSwitches = document.getElementsByClassName("switch");

    const changePress = e => {
        let btnID = e.target.id;  // Get ID of Clicked Element
        let arr = btnID.match(/[0-9]+$/);
        let num = parseInt(arr[0], 10);
        myLibrary[num].read = e.target.checked;
        createCard(myLibrary);
    }

    for (let changeSwitch of changeSwitches){
        changeSwitch.addEventListener("change", changePress);
    }

}



//popup section
function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function formBookAdd() {
    form = document.getElementById('formContainer');
    titleVal = document.getElementById('titleInput').value;
    authorVal = document.getElementById('authorInput').value;
    pagesVal = document.getElementById('pagesInput').value;
    readVal = document.getElementById('readInput').checked;

    let bookAdd = new Book(titleVal,authorVal,pagesVal, readVal);
    addBookToLibrary(bookAdd);
    createCard(myLibrary);
    form.reset();
    return false;
}



//run part
const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',416, false);
const theLightningThief = new Book('Percy Jackson and the Lightning Thief', 'Rick Riordan', 200, true)
addBookToLibrary(theHobbit);
addBookToLibrary(theLightningThief);
createCard(myLibrary);

// const remBtns = document.getElementsByClassName("remBtn");

// const remBtnPress = e => {
//     let btnID = e.target.id;  // Get ID of Clicked Element
//     let arr = btnID.match(/[0-9]+$/);
//     let num = parseInt(arr[0], 10);
//     console.log(num)
//     myLibrary.splice(num,1);
//     createCard(myLibrary);
// }
// for (let remBtn of remBtns){
//     remBtn.addEventListener("click", remBtnPress);
// }