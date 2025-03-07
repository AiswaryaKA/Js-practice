class Landing {
    //properties]
    database = {
        "milan": { username: "Milan", password: "milan123" },
        "manu": { username: "Manu", password: "manu123" },
        "mini": { username: "Mini", password: "mini123" },
        "mikki": { username: "Mikki", password: "milan123" }

    }
    //method
    saveData() {
        if (this.database) {
            localStorage.setItem("database", JSON.stringify(this.database))
        }
    }

    // retrive data
    getData(){
        this.database =JSON.parse(localStorage.getItem("database"))
        console.log(this.database);
        
    }

    register(){
        this.getData()
        console.log(user.value);
        console.log(pswd.value);

        if(user.value == "" || pswd.value == ""){
            alert("Please fill the form completely")
        }
        else if(user.value in this.database){
                alert("User already exist")
            }
            else{
                this.database[user.value] = {username:user.value , password:pswd.value}
                console.log(this.database);
                this.saveData()
                alert("Registration Successfull")

                window.location = "login.html"
                
            }
        }

        login(){
            console.log(logUser.value);
            console.log(logpswd.value);

            if(logUser.value == "" || logpswd.value){
                alert("Please fill the form completely")
            }else{
                if(logUser.value in this.database){
                    if(this.database[logUser.value].password == logpswd.value){
                        localStorage.setItem("user" , logUser.value)
                        alert("Login succesfully")
                        window.location = "home.html"
                    }
                    else{
                        alert('Invalid password or username')
                    }
                }
                else{
                    alert("User does not exist")
                }
            }
            
        }
    
        
        
        
    }

const obj = new Landing()
obj.saveData()

obj.getaData()