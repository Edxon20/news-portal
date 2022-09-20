import React from 'react';
import Noticia from './Noticia';

const ListadoNoticias = ({noticias}) => (

    <div className="row">

        {noticias.map(noticia => (

            <Noticia 
                key = {noticia.url}
                noticia={noticia}
            />          


        ))}
        {/* damos por implicito el return */}

    </div>




);

export default ListadoNoticias;