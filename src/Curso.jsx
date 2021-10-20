/*import React from "react";
import PropTypes from 'prop-types';
//const persona ={"nombre":"Eduardo","apellido":"Espinosa"}
//const curso = {"nombre":"React desde cero", "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyJ0IlyZC1QNS4mv_AETULQDLMdhYeODu_Q&usqp=CAU" ,"price":"$1200mxn"}
const Curso = ({ nombre, image, price, profesor }) => (
    <>
        <article class="card">
            <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={image} alt="" />
            </div>
            <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 class="t5 s-mb-2 s-center">
                    {nombre}
                </h3>
                <div class="s-mb-2 s-main-center">
                    <div class="card__teacher s-cross-center">
                        <span class="small">{profesor}</span>
                    </div>
                </div>
                <div class="s-main-center">
                    <a class="button--ghost-alert button--tiny" href="www.curso.com">{price}</a>
                </div>
            </div>
        </article>
    </>
    
)

Curso.propTypes = {
    nombre: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string

}
Curso.defaultProps = {
    nombre: "No se encontro titulo",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAeFBMVEUAAACcnJzv7+/g4OD///+zs7Pb29uKior09PTQ0NCfn5+Xl5czMzNjY2PBwcGurq4kJCR9fX0YGBi7u7uEhIR0dHQqKipdXV2Pj4/U1NTKyspERERoaGjc3Nw5OTlJSUlUVFQQEBDm5uYbGxs9PT0uLi5GRkZwcHA+6/lAAAACtElEQVR4nO3abZOaSBiF4YfXlhdpEBBoEVB0/P//cBunksoklZmaZHdhs/f1AQoK9HgKoasLEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8O/Lwldd6K0dZfvcyImtxDdO268dZuvc5HXtt+KX60bZPtd5XfuJHFp/3SybZ8u6FDeRnb3CmriY1s6zabasg72qnmXZZbx2nk37WpZrn4id76ydZ9OWv2G5F9FlmWUlZb3LfVPPjrLeQ1mfQFmfQFmf8Cwr9nc7fxbK+sBSVptoS/WU9YFl6OA/B6R+R1kf4J71CV9mHV5R1rvcUAdfaUbw7zLeG9XaeQAAAAAAAP6fLgeR9M2efNn1nftPz8/n/LkSmS9/c7SNybwsViJv57G89sd5reLbIvr9NxvNcH2eZD9s/CcibognRRSKuUVGxByM2psuD1WdlcEYZfcwPFVG6cwWcYi6u/TmnMdRZToRbYpITGuSqg/nKJJdtC+HMvqj+/KkKpzmPGSJSFueM3GyulN1KN49cW9BGlwTkx1FujmLD1K3qvbEKwp7MSYmjtWjDZeDHW/opAv6a5B8/JX/XVdRVdx4veOKHP3GGztTn9u6qzzt7FIvUKbqzWDLOpVRL3WS1KEyRSmya6OLL25lDz63wXXYJUE5Xv/s1+EmSe+3fJL9co8f5UWaUzqll/M0S/8ymkbkkY+X5bhxsnUOw10eIvaeNdjtUY7TlB4n6U/5qZeXy/xY+/esQT2X93rlGACAX5Q8tNJK6qLQg6OTWqZWxaqcxO7e67ptp2VgERRr59wE/dCOdqSI48wpI11Lo3WS2IFlkGSNLpuyUCpoYl6BWKRTnuezmuQmQ35Mx6qR4+2SN8Wcj+loB1dNfjidmrVjAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwe/4CGYYkiSAymjoAAAAASUVORK5CYII=",
    price: "--",
    profesor: "sin profesor"
}

export default Curso;*/

import React from "react";
import PropTypes from "prop-types"


const Curso=({title, image, price, detalle})=>(
<>

<article clasName="card">
  <div clasName="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src={image} alt={title}/>
  </div>
  <div clasName="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 clasName="t5 s-mb-2 s-center">
        {title} 
    </h3>
    <div clasName="s-mb-2 s-main-center">
      <div clasName="card__teacher s-cross-center">
        <span clasName="small">
            {detalle}
            </span>
      </div>
    </div>
    <div clasName="s-main-center">
      <a clasName="button--ghost-alert button--tiny" href="uaemex.com">{price}</a>
    </div>
  </div>
</article>

</>

)

Curso.propTypes = {
    tittle: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    detalle: PropTypes.string
}


Curso.defaultProps = {
tittle:"No se encontro la información",
image:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/32138012/b9dbd5f20642ca8ac594801ffc17ca8760f347c0_400x225.png",
price:"--",
detalle:"Sin asesor"
}


export default Curso