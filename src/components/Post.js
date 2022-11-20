import React from "react"

export default function Post(props) {

  const [bookMark, setBookMark] = React.useState("bookmark-outline");

  function changeBookMark(bookMark) {
    !(bookMark === "bookmark") ? setBookMark("bookmark") : setBookMark("bookmark-outline")
  }

  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImage} />
          {props.userName}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" src={props.userPost} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" name={bookMark} onClick={() => changeBookMark(bookMark)}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.userLiked} />
          <div class="texto" data-test="likes-number">
            Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}