const input = document.getElementById("favchap");
const btn = document.querySelector("button");
const list = document.getElementById("list");
const bookOfMormonBooks = [
  "1 Nephi",
  "2 Nephi",
  "Jacob",
  "Enos",
  "Jarom",
  "Omni",
  "Words of Mormon",
  "Mosiah",
  "Alma",
  "Helaman",
  "3 Nephi",
  "4 Nephi",
  "Mormon",
  "Ether",
  "Moroni"
];
let counter = 0;


btn.addEventListener("click", function(){
    
    if(counter < 10){ 

        if(input.value.trim() !== ""){

            let isValidFormat = false;
            let validateBook = false;
            for(let i = 0; i < bookOfMormonBooks.length; i++){
                
                isValidFormat = input.value.toLowerCase().startsWith(bookOfMormonBooks[i].toLowerCase()) 
                if(isValidFormat){
                    validateBook = true;
                    break;
                }
            }
            
            if(validateBook){
                counter++;
                let li = document.createElement("li");
                let deleteBtn = document.createElement("button");

                li.textContent = input.value;
                deleteBtn.textContent = "❌"
                li.appendChild(deleteBtn);

                list.append(li); 

                deleteBtn.addEventListener("click", function(){
                    list.removeChild(li);
                    input.focus();
                    counter--;
                });

                input.value = "";
                input.focus();

            }else{
                const randomBook = bookOfMormonBooks[Math.floor(Math.random() * bookOfMormonBooks.length)];
                alert(`Please enter a valid Book of Mormon chapter (e.g., '${randomBook} 2').`);
                input.focus();
            }    
        }
    }else{
        alert("You have reached the maximum number of favorite chapters.");
    }    

});

