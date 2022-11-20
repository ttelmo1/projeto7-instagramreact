import React from "react"


export default function Usuario(){

    const userTag = "catanacomics";
    const [userName, setUserName] = React.useState("Catana");
    const [userImage, setUserImage] = React.useState("assets/img/catanacomics.svg");

    function insertName() {
        const newName = prompt("Redefina seu nome de usuário:")
        if(newName){
            setUserName(newName)
        }
    }

    function insertImage() {
        const newImage = prompt("Insira um link de uma imagem:")
        if(newImage){
            setUserImage(newImage)
        }
    }

    function Usuario(props){
        return(
            <div className="usuario">
              <img src={userImage} onClick={insertImage} />
              <div className="texto">
                <strong>{props.userTag}</strong>
                <span>
                  {props.userName}
                  <ion-icon onClick={insertName} name="pencil"></ion-icon>
                </span>
              </div>
            </div>
        )
    }

    return(
        <Usuario userTag={userTag} userName={userName} />
    )
    
}