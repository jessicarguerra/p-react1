import series from '../services/dados'

const Lista = () =>{
    return(
        <div>
            {series.map(series => 
                <div key={series.id}>
                    <img width={700} src={series.imagem} alt=""/>
                    <h1>{series.nome}</h1>
                    <h4>{series.sinopse}</h4>

                </div>

               
            )}
        </div>
    )

}

export default Lista