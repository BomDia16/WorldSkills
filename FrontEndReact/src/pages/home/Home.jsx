import img_sussa from '../../assets/Midias/Bob/sussa.png'
import img_focar from '../../assets/Midias/Bob/focar.png'
import img_dormir from '../../assets/Midias/Bob/dormir.png'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {

    const viuTutorial = localStorage.getItem('viuTutorial') || 0

    
    const navigate = useNavigate()
    
    function voltar() {
        navigate('tutorial1')
        localStorage.setItem('viuTutorial', 0)
    }

    useEffect(() => {
        if (viuTutorial == 0) {
            console.log("ehjg")
            voltar()
        }
    }, [])

    function sussa() {
        navigate('sussa')
    }
    
    function focar() {
        navigate('focar')
    }
    
    function dormir() {
        navigate('dormir')
    }

    return (
        <>
            <div className="container">
                <nav>
                    <img 
                        className="logos" 
                        src="https://cdn-icons-png.flaticon.com/128/2732/2732652.png" 
                        alt="back" 
                        id="voltarTutorial" 
                        onClick={voltar}
                    />
                    <p>OBJETIVOS</p>

                    <a href="/statistics">
                        <img 
                            className="logos" 
                            src="https://cdn-icons-png.flaticon.com/128/8229/8229392.png" 
                            alt="statistics" 
                        />
                    </a>
                </nav>
                
                <div 
                    className="card" 
                    id="div_ficar_sussa" 
                    style={{ backgroundColor: "rgb(163, 255, 88)" }}
                    onClick={sussa}
                >
                    <img id="img_sussa" src={img_sussa} alt="" />
                    
                    <div className="texto">
                        <h4>FICAR SUSSA</h4>
                        <p>Relaxar, reduzir ansiedade e o stress</p>
                    </div>
                    
                    <img 
                        className="avancar" 
                        style={{ width: "10%", height: "30%" }} 
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png" 
                        alt="" 
                    />
                </div>

                <div 
                    className="card" 
                    id="div_focar_tarefa" 
                    style={{ backgroundColor: "rgb(255, 105, 105)" }}
                    onClick={focar}
                >
                    <img id="img_focar" src={img_focar} alt="" />
                    
                    <div className="texto">
                        <h4>FOCAR NA TAREFA</h4>
                        <p>Amentar o foco</p>
                    </div>

                    <img 
                        className="avancar" 
                        style={{ width: "10%", height: "30%" }} 
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png" 
                        alt="" 
                    />
                </div>

                <div 
                    className="card" 
                    id="div_dormir" 
                    style={{ backgroundColor: "rgb(88, 180, 255)" }}
                    onClick={dormir}
                >
                    <img id="img_dormir" src={img_dormir} alt="" />
                    
                    <div className="texto">
                        <h4>DORMIR DE BOAS</h4>
                        <p>Dormir melhor</p>
                    </div>

                    <img 
                        className="avancar" 
                        style={{ width: "10%", height: "30%" }} 
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png" 
                        alt="" 
                    />
                </div>
            </div>
        </>
    )
}

export default Home